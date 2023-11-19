import { FC } from 'react';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { MainEntities } from 'entities';

export const News: FC = () => {
	const { Block } = MainEntities;

	return (
		<Block title='Últimas noticias'>
			<Paragraph>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum corrupti praesentium voluptas numquam eius
				debitis a ducimus ab, unde mollitia officia soluta vitae et voluptatem autem odit nobis, architecto vero.
			</Paragraph>
			<Paragraph>some text blablabla...</Paragraph>
			<Link to={PublicRouterPaths.NEWS_PAGE}>News</Link>
		</Block>
	);
};
