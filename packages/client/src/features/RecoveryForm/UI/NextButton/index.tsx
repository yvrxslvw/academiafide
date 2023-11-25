import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, PublicRouterPaths, isErrorFromBackend, useRecoveryPasswordMutation } from 'shared';
import { RecoveryModels, usePopup } from 'entities';
import { useNavigate } from 'react-router';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	recoveryData: RecoveryModels.RecoveryData;
	setRecoveryData: Dispatch<SetStateAction<RecoveryModels.RecoveryData>>;
}

export const NextButton: FC<NextButtonProps> = ({ recoveryData, setRecoveryData }) => {
	const { createPopup } = usePopup();
	const [recovery, { error, data, isLoading }] = useRecoveryPasswordMutation();
	const navigate = useNavigate();

	const onClickHandler = async () => {
		const { email } = recoveryData;
		const emailRegex =
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:)\])/;

		if (email.search(emailRegex) === -1) {
			createPopup('Correo electronico incorrecto.');
			setRecoveryData({ ...recoveryData, emailError: true });
			return;
		}

		await recovery(email);
	};

	useEffect(() => {
		if (error) {
			if (isErrorFromBackend(error) && error.data.statusCode === 404) {
				createPopup('Correo electronico incorrecto.');
				setRecoveryData({ ...recoveryData, emailError: true });
			} else {
				createPopup('Se produjo un error inesperado... Vuelva a intentarlo más tarde.');
			}
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			createPopup(
				`Se ha enviado un correo electrónico con una nueva contraseña a su correo electrónico ${recoveryData.email}.`,
			);
			navigate(PublicRouterPaths.LOGIN_PAGE);
		}
	}, [data]);

	return (
		<Button type='submit' onClick={onClickHandler} loading={isLoading}>
			Siguente
		</Button>
	);
};
