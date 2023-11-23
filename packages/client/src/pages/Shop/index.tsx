import { FC, useEffect } from 'react';
import { ShopWidgets } from 'widgets';

export const ShopPage: FC = () => {
	const { ShopList } = ShopWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<ShopList />
		</>
	);
};
