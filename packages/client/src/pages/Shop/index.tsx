import { FC, useEffect } from 'react';
import { ShopList } from 'widgets/shop';

export const ShopPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<ShopList />
		</>
	);
};
