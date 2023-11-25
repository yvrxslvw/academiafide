import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react';
import { Input } from 'shared';
import { RecoveryModels } from 'entities';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
	recoveryData: RecoveryModels.RecoveryData;
	setRecoveryData: Dispatch<SetStateAction<RecoveryModels.RecoveryData>>;
}

export const EmailInput: FC<EmailInputProps> = ({ recoveryData, setRecoveryData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setRecoveryData({ ...recoveryData, email: event.target.value, emailError: false });
	};

	return (
		<Input
			label='Dirección de correo electrónico'
			type='email'
			value={recoveryData.email}
			onChange={onChangeHandler}
			error={recoveryData.emailError}
		/>
	);
};
