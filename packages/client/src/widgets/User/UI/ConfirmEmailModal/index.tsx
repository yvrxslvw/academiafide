import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Paragraph } from 'shared/UI';
import cl from './style.module.scss';
import { CodeInput, NextButton, ResendButton } from 'features/EmailConfirmation';

interface ConfirmEmailModalProps {
	email: string | null;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const ConfirmEmailModal: FC<ConfirmEmailModalProps> = ({ email, shown, setShown, refetch }) => {
	const { t } = useTranslation();
	const [code, setCode] = useState('');

	return (
		<Modal title={t('Confirmación de correo electrónico')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<Paragraph>
				{t(
					'Se envió un correo electrónico con un código de confirmación a la dirección de correo electrónico especificada. Ingréselo en el campo a continuación.',
				)}
			</Paragraph>
			<ResendButton email={email} />
			<CodeInput code={code} setCode={setCode} />
			<section className={cl.ButtonBody}>
				<NextButton code={code} refetch={refetch} setModalShown={setShown} />
			</section>
		</Modal>
	);
};
