import { FC } from 'react';
import { Title, modelEntries, useAppSelector } from 'shared';
import { PostEntities } from 'entities';
import cl from './style.module.scss';
import { formatContent } from '../../utils';

// ! To review
export const NewsList: FC = () => {
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.PostBody}>
				{modelEntries(entries).map(({ id, title, content }) => (
					<Post className={cl.Post} title={title} content={formatContent(content)} key={id} />
				))}
			</section>
		</div>
	);
};
