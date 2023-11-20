import { FC } from 'react';
import { ShopEntities } from 'entities';
import cl from './style.module.scss';

export const ShopList: FC = () => {
	const { Item } = ShopEntities;

	return (
		<div className={cl.Container}>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	);
};
