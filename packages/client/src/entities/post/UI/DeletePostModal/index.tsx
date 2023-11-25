import { FC, Dispatch, SetStateAction, ReactNode } from 'react';
import { IPost, Modal, Paragraph } from 'shared';
import cl from './style.module.scss';

interface DeletePostModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	post: IPost | undefined;
	confirmButton: ReactNode;
}

export const DeletePostModal: FC<DeletePostModalProps> = ({ shown, setShown, post, confirmButton }) => {
	return (
		<Modal shown={shown} setShown={setShown} title='Eliminar una publicación'>
			<Paragraph>¿Estás seguro de que quieres eliminar la publicación &quot;{post?.title}&quot;?</Paragraph>
			<section className={cl.ButtonBody}>{confirmButton}</section>
		</Modal>
	);
};
