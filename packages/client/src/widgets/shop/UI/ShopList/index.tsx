import { FC } from 'react';
import { Title, modelEntries, useAppSelector } from 'shared';
import { ShopEntities } from 'entities';
import { ShopItemFeatures } from 'features';
import cl from './style.module.scss';

// ! To review
export const ShopList: FC = () => {
	const { entries } = useAppSelector(state => state.shop);
	const { Item } = ShopEntities;
	const { PurchaseButton } = ShopItemFeatures;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Tienda de Academia Fide</Title>
			<section className={cl.ShopList}>
				{modelEntries(entries).map(({ id, ...itemInfo }) => (
					<Item {...itemInfo} purchaseButton={<PurchaseButton itemName={itemInfo.title} />} key={id} />
				))}
			</section>
		</div>
	);
};
