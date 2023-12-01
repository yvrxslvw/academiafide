import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Footer, Header } from 'entities/layout';
import { RegInfo, UserInfo } from 'features/Header';
import cl from './style.module.scss';
import { PopupBody } from '../PopupBody';

export const Layout: FC = () => {
	const { isLogged } = useAppSelector(state => state.user);

	return (
		<div className={cl.Layout}>
			<Header userBlock={isLogged ? <UserInfo /> : <RegInfo />} />
			<main>
				<Outlet />
			</main>
			<Footer />
			<PopupBody />
		</div>
	);
};
