import { FC, useEffect } from 'react';
import { Actions, Contacts, JoinCard, News, Shop } from 'widgets/main';

export const MainPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<JoinCard />
			<News />
			<Actions />
			<Shop />
			<Contacts />
		</>
	);
};
