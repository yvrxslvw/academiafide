import { Navigate, RouteObject } from 'react-router-dom';
import { PrivateRouterPaths, PublicRouterPaths } from 'shared/constants';
import { MainPage } from './Main';
import { TermsPage } from './Terms';
import { LoginPage } from './Login';
import { LogupPage } from './Logup';
import { RecoveryPage } from './Recovery';
import { NewsPage } from './News';
import { AboutPage } from './About';
import { ShopPage } from './Shop';
import { UserPage } from './User';
import { UsersPage } from './Users';
import { RolesPage } from './Roles';
import { ProductPage } from './Product';

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
	{
		path: PublicRouterPaths.USERS_PAGE + '/:login',
		element: <UserPage />,
	},
	{
		path: PublicRouterPaths.SHOP_PAGE + '/:id',
		element: <ProductPage />,
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
	{
		path: PublicRouterPaths.USERS_PAGE + '/:login',
		element: <UserPage />,
	},
	{
		path: PublicRouterPaths.USERS_PAGE,
		element: <UsersPage />,
	},
	{
		path: PrivateRouterPaths.ROLES_PAGE,
		element: <RolesPage />,
	},
	{
		path: PublicRouterPaths.SHOP_PAGE + '/:id',
		element: <ProductPage />,
	},
];
