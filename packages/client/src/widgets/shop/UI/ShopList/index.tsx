import { FC } from 'react';
import { Paragraph, Title, formatImageUrl, modelEntries, useAppSelector, useGetProductsQuery } from 'shared';
import { ShopEntities } from 'entities';
import { ShopItemFeatures } from 'features';
import cl from './style.module.scss';

// ! To review
export const ShopList: FC = () => {
	const { isError, isLoading } = useGetProductsQuery(null, { pollingInterval: 60 * 1000 });
	const { entries } = useAppSelector(state => state.shop);
	const { Item } = ShopEntities;
	const { PurchaseButton } = ShopItemFeatures;

	const data = modelEntries(entries);

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Tienda de Academia Fide</Title>
			<section className={cl.ShopList}>
				{isLoading ? (
					<Paragraph small>Cargando por favor espere...</Paragraph>
				) : isError ? (
					<Paragraph small>Se produjo un error inesperado... Vuelva a intentarlo más tarde.</Paragraph>
				) : data.length === 0 ? (
					<Paragraph small>Aún no hay productos.</Paragraph>
				) : (
					data.map(({ id, title, description, image }) => (
						<Item
							title={title}
							description={description}
							imageUrl={formatImageUrl(image)}
							purchaseButton={<PurchaseButton itemName={title} />}
							key={id}
						/>
					))
				)}
			</section>
		</div>
	);
};
