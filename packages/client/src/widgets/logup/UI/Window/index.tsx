import { FC, useState } from 'react';
import { Title } from 'shared';
import { LogupEntities, LogupModels } from 'entities';
import { LogupFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { Form } = LogupEntities;
	const { LoginInput, PasswordInput, PasswordConfirmInput, TermsCheckbox, NextButton } = LogupFormFeatures;

	const [logupData, setLogupData] = useState<LogupModels.LogupData>({
		login: '',
		password: '',
		passwordConfirm: '',
		terms: false,
		loginError: false,
		passwordError: false,
		passwordConfirmError: false,
	});

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Registro</Title>
				<Form
					loginInput={<LoginInput data={logupData} setData={setLogupData} />}
					passwordInput={<PasswordInput data={logupData} setData={setLogupData} />}
					passwordConfirmInput={<PasswordConfirmInput data={logupData} setData={setLogupData} />}
					termsCheckbox={<TermsCheckbox data={logupData} setData={setLogupData} />}
					nextButton={<NextButton logupData={logupData} setLogupData={setLogupData} />}
				/>
			</div>
		</div>
	);
};
