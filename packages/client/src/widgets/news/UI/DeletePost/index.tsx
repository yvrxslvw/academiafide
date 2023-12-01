import { FC, Dispatch, SetStateAction } from 'react';
import { IPost } from 'shared/models';
import { DeletePostModal } from 'entities/post';
import { ConfirmButton } from 'features/DeletePost';

interface DeletePostProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
	post: IPost | undefined;
}

export const DeletePost: FC<DeletePostProps> = ({ isModalShown, setIsModalShown, refetch, post }) => {
	return (
		<DeletePostModal
			shown={isModalShown}
			setShown={setIsModalShown}
			post={post}
			confirmButton={<ConfirmButton postId={post?.id} refetch={refetch} setModalShown={setIsModalShown} />}
		/>
	);
};
