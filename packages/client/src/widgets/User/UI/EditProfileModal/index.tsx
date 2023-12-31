import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApplyButton, EmailInput, ImageInput, LoginInput, NewPasswordInput } from 'features/EditProfile';
import { Button, Checkbox, Modal } from 'shared/UI';
import { UserInfo } from 'shared/api';
import { IEditProfile } from 'shared/models';
import cl from './style.module.scss';

interface EditProfileModalProps {
	userInfo: UserInfo;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({ userInfo, shown, setShown, refetch }) => {
	const { t } = useTranslation();
	const [data, setData] = useState<IEditProfile>({
		image: null,
		login: userInfo.login,
		loginError: false,
		password: '',
		passwordError: false,
		email: userInfo.email || '',
		emailError: false,
		email_news: userInfo.email_news,
	});

	return (
		<Modal title={t('Editando perfil')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<ImageInput data={data} setData={setData} />
			<LoginInput data={data} setData={setData} />
			<EmailInput data={data} setData={setData} />
			{userInfo.email && !userInfo.email_confirmed && (
				<section>
					<Button>{t('Confirmar correo electrónico')}</Button>
				</section>
			)}
			<NewPasswordInput data={data} setData={setData} />
			{userInfo.email && userInfo.email_confirmed && (
				<Checkbox
					label={t('Activar/desactivar boletines informativos por correo electrónico')}
					checked={userInfo.email_news}
				/>
			)}
			<section className={cl.ButtonBody}>
				<ApplyButton userInfo={userInfo} data={data} setData={setData} refetch={refetch} setModalShown={setShown} />
			</section>
		</Modal>
	);
};
