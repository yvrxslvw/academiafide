import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { RecoveryData } from 'entities/recovery';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
	recoveryData: RecoveryData;
	setRecoveryData: Dispatch<SetStateAction<RecoveryData>>;
}

export const EmailInput: FC<EmailInputProps> = ({ recoveryData, setRecoveryData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setRecoveryData({ ...recoveryData, email: event.target.value, emailError: false });
	};

	return (
		<Input
			label={t('Dirección de correo electrónico')}
			type='email'
			value={recoveryData.email}
			onChange={onChangeHandler}
			error={recoveryData.emailError}
		/>
	);
};
