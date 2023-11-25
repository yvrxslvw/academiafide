import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared';
import { LayoutEntities, PopupEntities } from 'entities';
import { HeaderFeatures } from 'features';
import cl from './style.module.scss';

export const Layout: FC = () => {
	const { isLogged } = useAppSelector(state => state.user);
	const { Header, Footer } = LayoutEntities;
	const { Popup } = PopupEntities;
	const { UserInfo, RegInfo } = HeaderFeatures;

	return (
		<div className={cl.Layout}>
			<Header userBlock={isLogged ? <UserInfo /> : <RegInfo />} />
			<main>
				<Outlet />
			</main>
			<Footer />
			<section className={cl.PopupBody}>
				<Popup />
			</section>
		</div>
	);
};
