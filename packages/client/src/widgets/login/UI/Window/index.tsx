import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/UI';
import { Form, LoginData } from 'entities/login';
import { LoginInput, NextButton, PasswordInput } from 'features/LoginForm';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { t } = useTranslation();
	const [loginData, setLoginData] = useState<LoginData>({
		login: '',
		password: '',
		loginError: false,
		passwordError: false,
	});

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>{t('Autorización')}</Title>
				<Form
					loginInput={<LoginInput loginData={loginData} setLoginData={setLoginData} />}
					passwordInput={<PasswordInput loginData={loginData} setLoginData={setLoginData} />}
					nextButton={<NextButton loginData={loginData} setLoginData={setLoginData} />}
				/>
			</div>
		</div>
	);
};
