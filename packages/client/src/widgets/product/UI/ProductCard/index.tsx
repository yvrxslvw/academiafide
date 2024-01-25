import { Dispatch, FC, SetStateAction } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PayPalContainer } from 'features/ShopItem';
import { IShop } from 'shared/models';
import { API_URL, PublicRouterPaths } from 'shared/constants';
import { Icons } from 'shared/assets';
import { useAppSelector } from 'shared/hooks';
import cl from './style.module.scss';

interface ProductCardProps {
	product: IShop;
	setGratitudeModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ProductCard: FC<ProductCardProps> = ({ product, setGratitudeModalShown }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	if (!userInfo.email) return <Navigate to={PublicRouterPaths.SHOP_PAGE} replace />;

	return (
		<div className={cl.ProductCard}>
			<section className={cn(cl.CardSection, cl.PayPalContainer)}>
				<PayPalContainer id={product.id} email={userInfo.email} setGratitudeModalShown={setGratitudeModalShown} />
			</section>
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
				<p>
					{t('Dirección de correo electrónico')}
					<br />
					<span>{userInfo.email}</span>
				</p>
			</section>
		</div>
	);
};
