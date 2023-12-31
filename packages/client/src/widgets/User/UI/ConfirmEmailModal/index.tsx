import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Modal, Paragraph } from 'shared/UI';
import cl from './style.module.scss';

interface ConfirmEmailModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmEmailModal: FC<ConfirmEmailModalProps> = ({ shown, setShown }) => {
	const { t } = useTranslation();

	return (
		<Modal title={t('Confirmación de correo electrónico')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<Paragraph>
				{t(
					'Se envió un correo electrónico con un código de confirmación a la dirección de correo electrónico especificada. Ingréselo en el campo a continuación.',
				)}
			</Paragraph>
			<button className={cl.ResendButton}>{t('¿El correo electrónico no ha llegado? Haga clic aquí.')}</button>
			<Input label={t('Código de confirmación')} />
			<section className={cl.ButtonBody}>
				<Button>{t('Siguiente')}</Button>
			</section>
		</Modal>
	);
};
