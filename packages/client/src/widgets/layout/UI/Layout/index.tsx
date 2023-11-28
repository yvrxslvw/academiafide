import { FC } from 'react';
import i18n from 'i18next';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared';
import { LayoutEntities } from 'entities';
import { HeaderFeatures } from 'features';
import cl from './style.module.scss';
import { PopupBody } from '../PopupBody';

export const Layout: FC = () => {
	const { isLogged } = useAppSelector(state => state.user);
	const { Header, Footer } = LayoutEntities;
	const { UserInfo, RegInfo } = HeaderFeatures;

	return (
		<div className={cl.Layout}>
			<div>
				{/* // ! */}
				<button onClick={() => i18n.changeLanguage('es')}>es</button>
				<button onClick={() => i18n.changeLanguage('en')}>en</button>
				<button onClick={() => i18n.changeLanguage('ru')}>ru</button>
			</div>
			<Header userBlock={isLogged ? <UserInfo /> : <RegInfo />} />
			<main>
				<Outlet />
			</main>
			<Footer />
			<PopupBody />
		</div>
	);
};
