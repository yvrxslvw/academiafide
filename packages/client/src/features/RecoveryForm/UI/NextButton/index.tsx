import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction } from 'react';
import { Button } from 'shared';
import { RecoveryModels, usePopup } from 'entities';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	recoveryData: RecoveryModels.RecoveryData;
	setRecoveryData: Dispatch<SetStateAction<RecoveryModels.RecoveryData>>;
}

export const NextButton: FC<NextButtonProps> = ({ recoveryData, setRecoveryData }) => {
	const { createPopup } = usePopup();

	const onClickHandler = () => {
		const { email } = recoveryData;
		const emailRegex =
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:)\])/;

		if (email.search(emailRegex) === -1) {
			createPopup('Correo electronico incorrecto.');
			setRecoveryData({ ...recoveryData, emailError: true });
			return;
		}
	};

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
