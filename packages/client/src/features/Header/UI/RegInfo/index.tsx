import { FC } from 'react';
import { Link } from 'shared';
import { PublicRouterPaths } from 'shared';

export const RegInfo: FC = () => {
	return (
		<>
			<Link to={PublicRouterPaths.LOGIN_PAGE}>Iniciar sesión</Link>
		</>
	);
};
