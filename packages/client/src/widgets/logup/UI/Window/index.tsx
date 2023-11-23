import { FC, useState } from 'react';
import { Title } from 'shared';
import { LogupEntities } from 'entities';
import { LogupFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [terms, setTerms] = useState(false);

	const { Form } = LogupEntities;
	const { LoginInput, PasswordInput, PasswordConfirmInput, TermsCheckbox, NextButton } = LogupFormFeatures;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Registro</Title>
				<Form
					loginInput={<LoginInput state={login} setState={setLogin} />}
					passwordInput={<PasswordInput state={password} setState={setPassword} />}
					passwordConfirmInput={<PasswordConfirmInput state={passwordConfirm} setState={setPasswordConfirm} />}
					termsCheckbox={<TermsCheckbox state={terms} setState={setTerms} />}
					nextButton={<NextButton data={{ login, password, passwordConfirm, terms }} />}
				/>
			</div>
		</div>
	);
};
