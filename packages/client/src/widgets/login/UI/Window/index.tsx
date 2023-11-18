import { FC, useState } from 'react';
import { Title } from 'shared';
import { LoginEntities } from 'entities';
import { LoginFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const { Form } = LoginEntities;
	const { LoginInput, PasswordInput, NextButton } = LoginFormFeatures;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Autorización</Title>
				<Form
					loginInput={<LoginInput state={login} setState={setLogin} />}
					passwordInput={<PasswordInput state={password} setState={setPassword} />}
					nextButton={<NextButton login={login} password={password} />}
				/>
			</div>
		</div>
	);
};
