import { PostEntities } from 'entities';
import { DeletePostFeatures } from 'features';
import { FC, Dispatch, SetStateAction } from 'react';
import { IPost } from 'shared';

interface DeletePostProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
	post: IPost | undefined;
}

export const DeletePost: FC<DeletePostProps> = ({ isModalShown, setIsModalShown, refetch, post }) => {
	const { DeletePostModal } = PostEntities;
	const { ConfirmButton } = DeletePostFeatures;

	return (
		<DeletePostModal
			shown={isModalShown}
			setShown={setIsModalShown}
			post={post}
			confirmButton={<ConfirmButton postId={post?.id} refetch={refetch} setModalShown={setIsModalShown} />}
		/>
	);
};
