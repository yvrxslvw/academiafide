import { FC } from 'react';
import { Link, PublicRouterPaths } from 'shared';

// ! To change link
export const ShowMoreButton: FC = () => {
	return <Link to={PublicRouterPaths.MAIN_PAGE}>Mostrar más noticias</Link>;
};
