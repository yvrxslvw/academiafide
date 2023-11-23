import { FC, useEffect } from 'react';
import { NewsWidgets } from 'widgets';

export const NewsPage: FC = () => {
	const { NewsList } = NewsWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NewsList />
		</>
	);
};
