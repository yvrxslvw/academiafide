import { FC } from 'react';
import { MainWidgets } from 'widgets';

export const MainPage: FC = () => {
	const { JoinCard, News, Actions, Shop, Contacts } = MainWidgets;

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