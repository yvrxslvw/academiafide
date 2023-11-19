import { FC, useState } from 'react';
import { Paragraph, Title } from 'shared';
import { RecoveryEntities } from 'entities';
import { RecoveryFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const [email, setEmail] = useState('');

	const { Form } = RecoveryEntities;
	const { EmailInput, NextButton } = RecoveryFormFeatures;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Recuperación de acceso</Title>
				<Paragraph className={cl.Text}>
					Para restaurar el acceso a su cuenta, necesitaremos la dirección de correo electrónico que proporcionó al
					registrar su cuenta.
				</Paragraph>
				<Form emailInput={<EmailInput state={email} setState={setEmail} />} nextButton={<NextButton email={email} />} />
			</div>
		</div>
	);
};
