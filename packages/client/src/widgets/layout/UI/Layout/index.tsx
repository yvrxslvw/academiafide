import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutEntities } from 'entities';
import { HeaderFeatures } from 'features';
import cl from './style.module.scss';

export const Layout: FC = () => {
	const { Header, Footer } = LayoutEntities;
	const { UserBlock } = HeaderFeatures;

	return (
		<div className={cl.Layout}>
			<Header userBlock={<UserBlock />} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
