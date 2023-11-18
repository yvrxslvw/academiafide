import { Navigate, RouteObject } from 'react-router-dom';
import { PublicRouterPaths } from 'shared';
import { MainPage } from './main';

export const PublicRoutes: RouteObject[] = [
	{
		path: '/*',
		element: <Navigate to={PublicRouterPaths.MAIN_PAGE} replace />,
	},
	{
		path: PublicRouterPaths.MAIN_PAGE,
		element: <MainPage />,
	},
];

export const PrivateRoutes: RouteObject[] = [...PublicRoutes];
