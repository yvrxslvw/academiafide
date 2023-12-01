import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Title } from 'shared/UI';
import { Form, RecoveryData } from 'entities/recovery';
import { EmailInput, NextButton } from 'features/RecoveryForm';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { t } = useTranslation();
	const [recoveryData, setRecoveryData] = useState<RecoveryData>({
		email: '',
		emailError: false,
	});

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>{t('Recuperación de acceso')}</Title>
				<Paragraph className={cl.Text}>
					{t(
						'Para restaurar el acceso a su cuenta, necesitaremos la dirección de correo electrónico que proporcionó al registrar su cuenta.',
					)}
				</Paragraph>
				<Form
					emailInput={<EmailInput recoveryData={recoveryData} setRecoveryData={setRecoveryData} />}
					nextButton={<NextButton recoveryData={recoveryData} setRecoveryData={setRecoveryData} />}
				/>
			</div>
		</div>
	);
};
