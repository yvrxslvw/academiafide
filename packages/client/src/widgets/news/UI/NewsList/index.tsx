import { FC } from 'react';
import { Paragraph, Title, modelEntries, useAppSelector, useGetPostsQuery } from 'shared';
import { PostEntities } from 'entities';
import cl from './style.module.scss';
import { formatContent } from '../../utils';

export const NewsList: FC = () => {
	const { isError, isLoading } = useGetPostsQuery(null, { pollingInterval: 60 * 1000 });
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;

	const data = modelEntries(entries);

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.PostBody}>
				{isLoading ? (
					<Paragraph small>Cargando por favor espere...</Paragraph>
				) : isError ? (
					<Paragraph small>Se produjo un error inesperado... Vuelva a intentarlo más tarde.</Paragraph>
				) : data.length === 0 ? (
					<Paragraph small>No hay novedades por el momento.</Paragraph>
				) : (
					data.map(({ id, title, content, image, createdAt }) => (
						<Post
							className={cl.Post}
							title={title}
							content={formatContent(content)}
							image={image}
							createdAt={createdAt}
							key={id}
						/>
					))
				)}
			</section>
		</div>
	);
};
