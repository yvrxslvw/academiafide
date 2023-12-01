import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/UI';
import { Form, LogupData } from 'entities/logup';
import { LoginInput, NextButton, PasswordConfirmInput, PasswordInput, TermsCheckbox } from 'features/LogupForm';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { t } = useTranslation();

	const [logupData, setLogupData] = useState<LogupData>({
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
				<Title className={cl.Title}>{t('Registro de cuenta')}</Title>
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
