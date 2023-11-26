import { FC } from 'react';
import { Loader, Paragraph, Title, formatImageUrl, useGetProductsQuery } from 'shared';
import { ShopEntities } from 'entities';
import { ShopItemFeatures, ShopListFeatures } from 'features';
import cl from './style.module.scss';

export const ShopList: FC = () => {
	const { data, isError, isLoading } = useGetProductsQuery(null, { pollingInterval: 60 * 1000 });
	const { Item } = ShopEntities;
	const { PurchaseButton } = ShopItemFeatures;
	const { AddNewButton } = ShopListFeatures;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Tienda de Academia Fide</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton />
			</section>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Paragraph small>Se produjo un error inesperado... Vuelva a intentarlo más tarde.</Paragraph>
			) : !data ? (
				<Paragraph small>Aún no hay productos.</Paragraph>
			) : (
				<section className={cl.ShopList}>
					{data.map(({ id, title, description, image }) => (
						<Item
							title={title}
							description={description}
							imageUrl={formatImageUrl(image)}
							purchaseButton={<PurchaseButton itemId={id} />}
							key={id}
						/>
					))}
				</section>
			)}
		</div>
	);
};
