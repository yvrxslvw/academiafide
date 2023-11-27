import { FC, useState } from 'react';
import { Loader, Paragraph, Title, formatImageUrl, useGetProductsQuery } from 'shared';
import { ShopEntities } from 'entities';
import { ShopItemFeatures, ShopListFeatures } from 'features';
import cl from './style.module.scss';
import { AddNewProduct } from '../AddNewProduct';

export const ShopList: FC = () => {
	const [isCreateProductModalShown, setIsCreateProductModalShown] = useState(false);
	const { data, isError, isLoading, refetch } = useGetProductsQuery(null, { pollingInterval: 60 * 1000 });
	const { Item } = ShopEntities;
	const { PurchaseButton } = ShopItemFeatures;
	const { AddNewButton } = ShopListFeatures;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Tienda de Academia Fide</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton setIsModalShown={setIsCreateProductModalShown} />
			</section>
			{isLoading ? (
				<Loader />
			) : isError || !data ? (
				<Paragraph small>Se produjo un error inesperado... Vuelva a intentarlo más tarde.</Paragraph>
			) : data.length === 0 ? (
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
			{data && (
				<>
					<AddNewProduct
						isModalShown={isCreateProductModalShown}
						setIsModalShown={setIsCreateProductModalShown}
						refetch={refetch}
					/>
				</>
			)}
		</div>
	);
};
