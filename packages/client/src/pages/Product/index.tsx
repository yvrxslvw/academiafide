import { FC, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GratitudeModal, ProductCard } from 'widgets/product';
import { useGetProductByIdQuery } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { Loader } from 'shared/UI';
import cl from './style.module.scss';

export const ProductPage: FC = () => {
	const productId = Number(useLocation().pathname.slice(6));
	const { data, isLoading, isError } = useGetProductByIdQuery(productId);
	const { t } = useTranslation();
	const [isGratitudeModalShown, setIsGratitudeModalShown] = useState(false);

	if (isLoading) return <Loader />;
	if (!data || isError) return <Navigate to={PublicRouterPaths.SHOP_PAGE} replace />;

	return (
		<div className={cl.Container}>
			<h2>{t('Vas a comprar:')}</h2>
			<ProductCard product={data} setGratitudeModalShown={setIsGratitudeModalShown} />

			<GratitudeModal modalShown={isGratitudeModalShown} setModalShown={setIsGratitudeModalShown} />
		</div>
	);
};
