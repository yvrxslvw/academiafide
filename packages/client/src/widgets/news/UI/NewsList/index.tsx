import { FC } from 'react';
import { Title } from 'shared';
import { PostEntities } from 'entities';
import { formatContent } from '../../utils';
import cl from './style.module.scss';

const mock = [
	{
		title: 'I AM TITLE!!!',
		content:
			'I AM CONTENT\nLorem ipsum dolor sit amet consectetur adipisicing elit.\nVero consequatur sunt quas, laudantium impedit sed incidunt ducimus nesciunt illo!\nIn quasi voluptates quas labore ducimus nihil consequuntur architecto, eius odit.\n[Link|https://t.me/yvrxslw]\nhttps://t.me/yvrxslw\n',
	},
	{
		title: 'Lorem',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat incidunt nobis eveniet est iste iusto distinctio saepe minima, ducimus nam quos dignissimos, in eum cum obcaecati nostrum accusamus eius?',
	},
	{
		title: 'Hello',
		content: 'Some content over here',
	},
];

export const NewsList: FC = () => {
	const { Post } = PostEntities;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.PostBody}>
				{mock.map(({ title, content }, index) => (
					<Post className={cl.Post} title={title} content={formatContent(content)} key={index} />
				))}
			</section>
		</div>
	);
};
