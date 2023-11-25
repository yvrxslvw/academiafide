import { Navigate, RouteObject } from 'react-router-dom';
import { PublicRouterPaths } from 'shared';
import { MainPage } from './Main';
import { TermsPage } from './Terms';
import { LoginPage } from './Login';
import { LogupPage } from './Logup';
import { RecoveryPage } from './Recovery';
import { NewsPage } from './News';
import { AboutPage } from './About';
import { ShopPage } from './Shop';

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
	{
		path: PublicRouterPaths.LOGIN_PAGE,
		element: <LoginPage />,
	},
	{
		path: PublicRouterPaths.LOGUP_PAGE,
		element: <LogupPage />,
	},
	{
		path: PublicRouterPaths.RECOVERY_PAGE,
		element: <RecoveryPage />,
	},
	{
		path: PublicRouterPaths.NEWS_PAGE,
		element: <NewsPage />,
	},
	{
		path: PublicRouterPaths.ABOUT_PAGE,
		element: <AboutPage />,
	},
	{
		path: PublicRouterPaths.SHOP_PAGE,
		element: <ShopPage />,
	},
];

export const PrivateRoutes: RouteObject[] = [
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
	{
		path: PublicRouterPaths.NEWS_PAGE,
		element: <NewsPage />,
	},
	{
		path: PublicRouterPaths.ABOUT_PAGE,
		element: <AboutPage />,
	},
	{
		path: PublicRouterPaths.SHOP_PAGE,
		element: <ShopPage />,
	},
];
