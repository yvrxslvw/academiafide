import { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'shared/UI';
import cl from './style.module.scss';
import { PublicRouterPaths } from 'shared/constants';

interface GratitudeModalProps {
	modalShown: boolean;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const GratitudeModal: FC<GratitudeModalProps> = ({ modalShown, setModalShown }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate(PublicRouterPaths.SHOP_PAGE);
	};

	return (
		<Modal title={t('Compra exitosa')} shown={modalShown} setShown={setModalShown} className={cl.GratitudeModal}>
			<p>
				{t(
					'¡Gracias por comprar este producto! Próximamente recibirás información sobre tu compra y el producto en sí por correo electrónico.',
				)}
			</p>
			<section className={cl.ButtonSection}>
				<Button onClick={onClickHandler}>{t('Cerrar')}</Button>
			</section>
		</Modal>
	);
};
