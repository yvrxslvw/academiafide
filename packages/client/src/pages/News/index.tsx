import { FC } from 'react';
import { NewsWidgets } from 'widgets';

export const NewsPage: FC = () => {
	const { NewsList } = NewsWidgets;

	return (
		<>
			<NewsList />
		</>
	);
};
