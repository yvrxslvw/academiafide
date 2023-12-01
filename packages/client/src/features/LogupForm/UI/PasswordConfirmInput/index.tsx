import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { LogupData } from 'entities/logup';

interface PasswordConfirmInputProps {
	data: LogupData;
	setData: Dispatch<SetStateAction<LogupData>>;
}

export const PasswordConfirmInput: FC<PasswordConfirmInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, passwordConfirm: event.target.value, passwordConfirmError: false });
	};

	return (
		<Input
			label={t('Confirmación de contraseña')}
			type='password'
			value={data.passwordConfirm}
			onChange={onChangeHandler}
			error={data.passwordConfirmError}
		/>
	);
};
