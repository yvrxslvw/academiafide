import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'shared/UI';
import cl from './style.module.scss';

interface ErrorModalProps {
	isShown: boolean;
	setIsShown: Dispatch<SetStateAction<boolean>>;
}

export const ErrorModal: FC<ErrorModalProps> = ({ isShown, setIsShown }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setIsShown(false);
	};

	return (
		<Modal title={t('Error')} shown={isShown} setShown={setIsShown} className={cl.ErrorModal}>
			<p>
				{t(
					'Para comprar, debe estar registrado en este sitio web y tener una dirección de correo electrónico verificada.',
				)}
			</p>
			<section className={cl.ButtonSection}>
				<Button onClick={onClickHandler}>{t('Cerrar')}</Button>
			</section>
		</Modal>
	);
};
