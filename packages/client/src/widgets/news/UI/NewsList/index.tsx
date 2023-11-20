import { FC } from 'react';
import { Title, modelEntries, useAppSelector } from 'shared';
import { PostEntities } from 'entities';
import { formatContent } from '../../utils';
import cl from './style.module.scss';

// ! To review
export const NewsList: FC = () => {
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.PostBody}>
				{modelEntries(entries).map(({ title, content }, index) => (
					<Post className={cl.Post} title={title} content={formatContent(content)} key={index} />
				))}
			</section>
		</div>
	);
};
