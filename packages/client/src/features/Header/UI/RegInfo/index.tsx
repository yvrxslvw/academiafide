import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PublicRouterPaths } from 'shared';
import cl from './style.module.scss';

export const RegInfo: FC = () => {
	return (
		<>
			<Link to={PublicRouterPaths.MAIN_PAGE}>Crear cuenta</Link>
			<Link to={PublicRouterPaths.MAIN_PAGE} className={cl.MarginLeft}>
				Iniciar sesión
			</Link>
		</>
	);
};
