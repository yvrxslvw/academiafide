import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { Modal } from 'shared';

interface CreatePostModalProps extends PropsWithChildren {
	modalShown: boolean;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const CreatePostModal: FC<CreatePostModalProps> = ({ modalShown, setModalShown }) => {
	return <Modal shown={modalShown} setShown={setModalShown} title='Agregando una nueva publicación'></Modal>;
};
