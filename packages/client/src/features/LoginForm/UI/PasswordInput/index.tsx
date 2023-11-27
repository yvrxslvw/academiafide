import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared';
import { LoginModels } from 'entities';

interface PasswordInputProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const PasswordInput: FC<PasswordInputProps> = ({ loginData, setLoginData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginData({ ...loginData, password: event.target.value, passwordError: false });
	};

	return (
		<Input
			label={t('Contraseña')}
			type='password'
			value={loginData.password}
			onChange={onChangeHandler}
			error={loginData.passwordError}
		/>
	);
};
