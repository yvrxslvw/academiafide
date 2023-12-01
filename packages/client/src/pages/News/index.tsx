import { FC, useEffect } from 'react';
import { NewsList } from 'widgets/news';

export const NewsPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NewsList />
		</>
	);
};
