import { FC, useState } from 'react';
import { Paragraph, Title, formatDate, formatImageUrl, modelEntries, useAppSelector, useGetPostsQuery } from 'shared';
import { PostEntities } from 'entities';
import { NewPostFeatures, PostFeatures } from 'features';
import cl from './style.module.scss';
import { formatContent } from '../../utils';
import { AddNewPost } from '../AddNewPost';
import { DeletePost } from '../DeletePost';
import { EditPost } from '../EditPost';

export const NewsList: FC = () => {
	const [isAddNewModalShown, setIsAddNewModalShown] = useState(false);
	const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
	const [deletionId, setDeletionId] = useState(-1);
	const [isEditModalShown, setIsEditModalShown] = useState(false);
	const [editionId, setEditionId] = useState(-1);
	const { isError, isLoading, refetch } = useGetPostsQuery(null, { pollingInterval: 60 * 1000 });
	const { entries } = useAppSelector(state => state.post);
	const { Post } = PostEntities;
	const { AddNewButton } = NewPostFeatures;
	const { Actions } = PostFeatures;

	const data = modelEntries(entries);

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Últimas noticias</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton setModalShown={setIsAddNewModalShown} />
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
							actions={
								<Actions
									id={id}
									setDeleteModalShown={setIsDeleteModalShown}
									setDeletionId={setDeletionId}
									setEditModalShown={setIsEditModalShown}
									setEditionId={setEditionId}
								/>
							}
							key={id}
						/>
					))
				)}
			</section>
			<AddNewPost isModalShown={isAddNewModalShown} setIsModalShown={setIsAddNewModalShown} refetch={refetch} />
			<DeletePost
				isModalShown={isDeleteModalShown}
				setIsModalShown={setIsDeleteModalShown}
				refetch={refetch}
				post={entries[deletionId]}
			/>
			<EditPost
				isModalShown={isEditModalShown}
				setIsModalShown={setIsEditModalShown}
				refetch={refetch}
				post={entries[editionId]}
			/>
		</div>
	);
};
