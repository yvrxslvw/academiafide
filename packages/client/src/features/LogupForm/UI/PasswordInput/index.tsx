import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { LogupData } from 'entities/logup';

interface PasswordInputProps {
	data: LogupData;
	setData: Dispatch<SetStateAction<LogupData>>;
}

export const PasswordInput: FC<PasswordInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, password: event.target.value, passwordError: false });
	};

	return (
		<Input
			label={t('Contraseña')}
			type='password'
			value={data.password}
			onChange={onChangeHandler}
			error={data.passwordError}
		/>
	);
};
