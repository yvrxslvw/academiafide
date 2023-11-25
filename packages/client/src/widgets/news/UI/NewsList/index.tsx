import { FC, useState } from 'react';
import { Paragraph, Title, formatDate, formatImageUrl, modelEntries, useAppSelector, useGetPostsQuery } from 'shared';
import { PostEntities } from 'entities';
import { NewPostFeatures } from 'features';
import cl from './style.module.scss';
import { formatContent } from '../../utils';
import { AddNewPost } from '../AddNewPost';

export const NewsList: FC = () => {
	const [isModalShown, setIsModalShown] = useState(false);
	const { isError, isLoading, refetch } = useGetPostsQuery(null, { pollingInterval: 60 * 1000 });
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;
	const { AddNewButton } = NewPostFeatures;

	const data = modelEntries(entries);

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton setModalShown={setIsModalShown} />
			</section>
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
							image={formatImageUrl(image)}
							createdAt={formatDate(createdAt)}
							key={id}
						/>
					))
				)}
			</section>
			<AddNewPost isModalShown={isModalShown} setIsModalShown={setIsModalShown} refetch={refetch} />
		</div>
	);
};
