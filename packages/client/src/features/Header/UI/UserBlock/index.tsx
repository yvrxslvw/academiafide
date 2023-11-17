import { FC } from 'react';
import { Link, PublicRouterPaths, useAppSelector } from 'shared';
import cl from './style.module.scss';

// ! To change all links
export const UserBlock: FC = () => {
	const { isLogged, userInfo } = useAppSelector(state => state.user);

	const onClickAvatarHandler = () => {
		// eslint-disable-next-line no-console
		console.info('will be account actions here');
	};

	if (isLogged)
		return (
			<>
				<Link to={PublicRouterPaths.MAIN_PAGE} className={cl.MarginRight}>
					Cerrar sesión
				</Link>
				<img src={userInfo.avatarUrl} alt='Avatar' className={cl.UserAvatar} onClick={onClickAvatarHandler} />
			</>
		);
	else
		return (
			<>
				<Link to={PublicRouterPaths.MAIN_PAGE} className={cl.MarginRight}>
					Crear cuenta
				</Link>
				<Link to={PublicRouterPaths.MAIN_PAGE}>Iniciar sesión</Link>
			</>
		);
};
