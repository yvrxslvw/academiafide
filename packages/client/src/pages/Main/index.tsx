import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PrivateRouterPaths } from 'shared/constants';
import { Actions, Contacts, JoinCard, News, Shop } from 'widgets/main';

export const MainPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Link to={PrivateRouterPaths.USERS_PAGE + '/adrian'}>temp</Link>
			<JoinCard />
			<News />
			<Actions />
			<Shop />
			<Contacts />
		</>
	);
};
