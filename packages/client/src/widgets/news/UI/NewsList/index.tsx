import { FC } from 'react';
import { Title, modelEntries, useAppSelector, useGetPostsQuery } from 'shared';
import { PostEntities } from 'entities';
import cl from './style.module.scss';
import { formatContent } from '../../utils';

export const NewsList: FC = () => {
	const { isError, isLoading } = useGetPostsQuery();
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.PostBody}>
				{isLoading ? (
					<p>Loading...</p>
				) : isError ? (
					<p>Error!</p>
				) : (
					modelEntries(entries).map(({ id, title, content }) => (
						<Post className={cl.Post} title={title} content={formatContent(content)} key={id} />
					))
				)}
			</section>
		</div>
	);
};
