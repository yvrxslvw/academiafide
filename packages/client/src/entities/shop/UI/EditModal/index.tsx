import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface EditModalProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	titleInput: ReactNode;
	descriptionTextarea: ReactNode;
	priceInput: ReactNode;
	imageInput: ReactNode;
	nextButton: ReactNode;
}

export const EditModal: FC<EditModalProps> = ({
	isModalShown,
	setIsModalShown,
	titleInput,
	descriptionTextarea,
	priceInput,
	imageInput,
	nextButton,
}) => {
	return (
		<Modal shown={isModalShown} setShown={setIsModalShown} title='Editar un producto'>
			<section className={cl.Item}>{titleInput}</section>
			<section className={cl.Item}>{priceInput}</section>
			<section className={cl.Item}>{descriptionTextarea}</section>
			<section className={cl.Item}>{imageInput}</section>
			<section className={cl.Item}>{nextButton}</section>
		</Modal>
	);
};
