import { FC, useState } from 'react';
import { Title } from 'shared';
import { LoginEntities, LoginModels } from 'entities';
import { LoginFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const [loginData, setLoginData] = useState<LoginModels.LoginData>({
		login: '',
		password: '',
		loginError: false,
		passwordError: false,
	});
	const { Form } = LoginEntities;
	const { LoginInput, PasswordInput, NextButton } = LoginFormFeatures;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Autorización</Title>
				<Form
					loginInput={<LoginInput loginData={loginData} setLoginData={setLoginData} />}
					passwordInput={<PasswordInput loginData={loginData} setLoginData={setLoginData} />}
					nextButton={<NextButton loginData={loginData} setLoginData={setLoginData} />}
				/>
			</div>
		</div>
	);
};
