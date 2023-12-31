import { usePopup } from 'processes/Popup';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RegExp } from 'shared/RegExp';
import { Button } from 'shared/UI';
import { UserInfo, useRefreshMutation, useUpdateMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { IEditProfile } from 'shared/models';
import { isErrorFromBackend } from 'shared/utils';

interface ApplyButtonProps {
	userInfo: UserInfo;
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
	refetch: () => void;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ApplyButton: FC<ApplyButtonProps> = ({ userInfo, data, setData, refetch, setModalShown }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const navigate = useNavigate();
	const [updateProfile, { isLoading, error, isSuccess }] = useUpdateMutation();
	const [refreshToken] = useRefreshMutation();

	const onClickHandler = async () => {
		const { login, password, image, email, email_news } = data;
		const formData = new FormData();

		if (login && login.search(RegExp.login) === -1) {
			createPopup(t('Nombre de usuario es incorrecto.'));
			setData({ ...data, loginError: true });
			return;
		}
		if (password && password.search(RegExp.password) === -1) {
			createPopup(t('Contraseña es incorrecta.'));
			setData({ ...data, passwordError: true });
			return;
		}
		if (email && email.search(RegExp.email) === -1) {
			createPopup(t('Correo electronico incorrecto.'));
			setData({ ...data, emailError: true });
			return;
		}

		if (login && login !== userInfo.login) formData.append('login', login);
		if (password) formData.append('password', password);
		if (image) formData.append('image', image);
		if (email && email !== userInfo.email) formData.append('email', email);
		if (email_news) formData.append('email_news', String(email_news));

		await updateProfile(formData);
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 403) {
				if (error.data.error === 'login') {
					createPopup(t('Este nombre de usuario ya está en uso.'));
					setData({ ...data, loginError: true });
				} else if (error.data.error === 'email') {
					createPopup(t('Esta dirección de correo electrónico ya está en uso.'));
					setData({ ...data, emailError: true });
				} else createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			} else {
				createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
			}
		}
	}, [error]);

	useEffect(() => {
		if (isSuccess) {
			navigate(PublicRouterPaths.USERS_PAGE + `/${data.login}`);
			createPopup(t('Editado con éxito.'));
			refetch();
			refreshToken();
			setModalShown(false);
			setData({
				...data,
				image: null,
				password: '',
				loginError: false,
				passwordError: false,
				emailError: false,
			});
		}
	}, [isSuccess]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Aplicar')}
		</Button>
	);
};
