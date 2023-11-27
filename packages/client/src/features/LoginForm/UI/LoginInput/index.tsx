import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared';
import { LoginModels } from 'entities';

interface LoginInputProps {
	loginData: LoginModels.LoginData;
	setLoginData: Dispatch<SetStateAction<LoginModels.LoginData>>;
}

export const LoginInput: FC<LoginInputProps> = ({ loginData, setLoginData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginData({ ...loginData, login: event.target.value, loginError: false });
	};

	return (
		<Input
			label={t('Nombre de usuario')}
			type='text'
			value={loginData.login}
			onChange={onChangeHandler}
			error={loginData.loginError}
		/>
	);
};
