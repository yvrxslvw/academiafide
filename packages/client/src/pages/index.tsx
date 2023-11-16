import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from 'widgets';
import { PublicRouterPaths } from 'shared';
import { MainPage } from './main';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/*',
				element: <Navigate to={PublicRouterPaths.MAIN_PAGE} replace />,
			},
			{
				path: PublicRouterPaths.MAIN_PAGE,
				element: <MainPage />,
			},
		],
	},
]);
