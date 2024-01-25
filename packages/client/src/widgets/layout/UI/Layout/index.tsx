import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Footer, Header } from 'entities/layout';
import { RegInfo, UserInfo } from 'features/Header';
import cl from './style.module.scss';
import { PopupBody } from '../PopupBody';
import { Cookie } from '../Cookie';

export const Layout: FC = () => {
	const { isLogged } = useAppSelector(state => state.user);
	const [isCookieShown, setIsCookieShown] = useState(document.cookie.indexOf('cookieAccepted=true') === -1);

	return (
		<div className={cl.Layout}>
			<Header userBlock={isLogged ? <UserInfo /> : <RegInfo />} />
			<main>
				<Outlet />
			</main>
			<Footer isCookieShown={isCookieShown} />
			<PopupBody />
			<Cookie isCookieShown={isCookieShown} setIsCookieShown={setIsCookieShown} />
		</div>
	);
};
