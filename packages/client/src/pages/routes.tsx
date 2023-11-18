import { Navigate, RouteObject } from 'react-router-dom';
import { PublicRouterPaths } from 'shared';
import { MainPage } from './Main';
import { TermsPage } from './Terms';

export const PublicRoutes: RouteObject[] = [
	{
		path: '/*',
		element: <Navigate to={PublicRouterPaths.MAIN_PAGE} replace />,
	},
	{
		path: PublicRouterPaths.MAIN_PAGE,
		element: <MainPage />,
	},
	{
		path: PublicRouterPaths.TERMS_PAGE,
		element: <TermsPage />,
	},
];

export const PrivateRoutes: RouteObject[] = [...PublicRoutes];
