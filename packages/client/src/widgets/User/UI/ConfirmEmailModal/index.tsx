import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Paragraph } from 'shared/UI';
import cl from './style.module.scss';
import { CodeInput, NextButton } from 'features/EmailConfirmation';

interface ConfirmEmailModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const ConfirmEmailModal: FC<ConfirmEmailModalProps> = ({ shown, setShown, refetch }) => {
	const { t } = useTranslation();
	const [code, setCode] = useState('');

	return (
		<Modal title={t('Confirmación de correo electrónico')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<Paragraph>
				{t(
					'Se envió un correo electrónico con un código de confirmación a la dirección de correo electrónico especificada. Ingréselo en el campo a continuación.',
				)}
			</Paragraph>
			<button className={cl.ResendButton}>{t('¿El correo electrónico no ha llegado? Haga clic aquí.')}</button>
			<CodeInput code={code} setCode={setCode} />
			<section className={cl.ButtonBody}>
				<NextButton code={code} refetch={refetch} setModalShown={setShown} />
			</section>
		</Modal>
	);
};
