import { FC } from 'react';
import { ShopWidgets } from 'widgets';

export const ShopPage: FC = () => {
	const { ShopList } = ShopWidgets;

	return (
		<>
			<ShopList />
		</>
	);
};
