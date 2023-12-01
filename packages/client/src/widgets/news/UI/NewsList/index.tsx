import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPostsQuery } from 'shared/api';
import { Loader, Paragraph, Title } from 'shared/UI';
import { formatDate, formatImageUrl } from 'shared/utils';
import { Post } from 'entities/post';
import { Actions } from 'features/Post';
import { AddNewButton } from 'features/NewPost';
import cl from './style.module.scss';
import { formatContent } from '../../utils';
import { AddNewPost } from '../AddNewPost';
import { DeletePost } from '../DeletePost';
import { EditPost } from '../EditPost';

export const NewsList: FC = () => {
	const { t } = useTranslation();
	const [isAddNewModalShown, setIsAddNewModalShown] = useState(false);
	const [isEditModalShown, setIsEditModalShown] = useState(false);
	const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
	const [editionId, setEditionId] = useState(-1);
	const [deletionId, setDeletionId] = useState(-1);
	const { data, isError, isLoading, refetch } = useGetPostsQuery(null, { pollingInterval: 60 * 1000 });

	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>{t('Últimas noticias')}</Title>
			<section className={cl.AddNewButton}>
				<AddNewButton setModalShown={setIsAddNewModalShown} />
			</section>
			<section className={cl.PostBody}>
				{isLoading ? (
					<Loader />
				) : isError || !data ? (
					<Paragraph small>{t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')}</Paragraph>
				) : data.length === 0 ? (
					<Paragraph small>{t('No hay novedades por el momento.')}</Paragraph>
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
			{data && (
				<>
					<DeletePost
						isModalShown={isDeleteModalShown}
						setIsModalShown={setIsDeleteModalShown}
						refetch={refetch}
						post={data[data.findIndex(post => post.id === deletionId)]}
					/>
					<EditPost
						isModalShown={isEditModalShown}
						setIsModalShown={setIsEditModalShown}
						refetch={refetch}
						post={data[data.findIndex(post => post.id === editionId)]}
					/>
				</>
			)}
		</div>
	);
};
