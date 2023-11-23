import { FC, useEffect } from 'react';
import { MainWidgets } from 'widgets';

export const MainPage: FC = () => {
	const { JoinCard, News, Actions, Shop, Contacts } = MainWidgets;

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
