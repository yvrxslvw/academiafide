import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutEntities } from 'entities';
import cl from './style.module.scss';

export const Layout: FC = () => {
	const { Header, Footer } = LayoutEntities;

	return (
		<div className={cl.Layout}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
