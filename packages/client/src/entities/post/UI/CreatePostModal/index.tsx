import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Modal } from 'shared';
import cl from './style.module.scss';

interface CreatePostModalProps {
	modalShown: boolean;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	titleTextArea: ReactNode;
	contentTextArea: ReactNode;
	imageFileInput: ReactNode;
	nextButton: ReactNode;
}

export const CreatePostModal: FC<CreatePostModalProps> = ({
	modalShown,
	setModalShown,
	titleTextArea,
	contentTextArea,
	imageFileInput,
	nextButton,
}) => {
	return (
		<Modal shown={modalShown} setShown={setModalShown} title='Agregando una nueva publicación'>
			<section className={cl.Item}>{titleTextArea}</section>
			<section className={cl.Item}>{contentTextArea}</section>
			<section className={cl.Item}>{imageFileInput}</section>
			<section className={cl.Button}>{nextButton}</section>
		</Modal>
	);
};
