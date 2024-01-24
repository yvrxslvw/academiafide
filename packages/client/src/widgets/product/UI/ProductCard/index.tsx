import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IShop } from 'shared/models';
import { API_URL } from 'shared/constants';
import { Icons } from 'shared/assets';
import { useAppSelector } from 'shared/hooks';
import cl from './style.module.scss';

interface ProductCardProps {
	product: IShop;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);
	const [email, setEmail] = useState(userInfo.email && userInfo.email_confirmed ? userInfo.email : '');

	return (
		<div className={cl.ProductCard}>
			<section className={cl.CardSection}>{/* PayPal purchasing */}</section>
			<section className={cl.CardSection}>
				<section className={cl.ImageSection}>
					<img src={product.image ? API_URL + `/${product.image}` : Icons.ChessFigure} alt='product' />
				</section>
				<p>
					{t('Nombre')}:
					<br />
					<span>{product.title}</span>
				</p>
				<p>
					{t('Descripción')}:
					<br />
					<span>{product.description}</span>
				</p>
				<p>
					{t('Precio')}:
					<br />
					<span>&#8364;{product.price}</span>
				</p>
				{/* email input */}
				<p className={cl.Notation}>
					*{' '}
					{t(
						'Se requiere una dirección de correo electrónico ya que necesitaremos enviarle el producto o comunicarnos con usted.',
					)}
				</p>
			</section>
		</div>
	);
};
