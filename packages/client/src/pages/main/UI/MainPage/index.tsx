import { FC } from 'react';
import { MainWidgets } from 'widgets';

export const MainPage: FC = () => {
	const { JoinCard, News } = MainWidgets;

	return (
		<>
			<JoinCard />
			<News />
		</>
	);
};
