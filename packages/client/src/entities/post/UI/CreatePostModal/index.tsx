import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { Modal } from 'shared';

interface CreatePostModalProps extends PropsWithChildren {
	modalShown: boolean;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const CreatePostModal: FC<CreatePostModalProps> = ({ modalShown, setModalShown }) => {
	return (
		<Modal shown={modalShown} setShown={setModalShown} title='Agregando una nueva publicación'>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem distinctio quam officiis autem nam
			perspiciatis quia sint fugiat repellat. Sit ipsa eligendi voluptatibus ducimus, culpa provident tempore fuga
			dolorem.
		</Modal>
	);
};
