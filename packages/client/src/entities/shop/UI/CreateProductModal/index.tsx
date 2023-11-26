import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Modal } from 'shared';
import cl from './style.module.scss';

interface CreateProductModalProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	titleInput: ReactNode;
	descriptionTextarea: ReactNode;
	priceInput: ReactNode;
	nextButton: ReactNode;
}

export const CreateProductModal: FC<CreateProductModalProps> = ({
	isModalShown,
	setIsModalShown,
	titleInput,
	descriptionTextarea,
	priceInput,
	nextButton,
}) => {
	return (
		<Modal shown={isModalShown} setShown={setIsModalShown} title='Agregar un nuevo producto'>
			<section className={cl.Item}>{titleInput}</section>
			<section className={cl.Item}>{descriptionTextarea}</section>
			<section className={cl.Item}>{priceInput}</section>
			<section className={cl.Item}>{nextButton}</section>
		</Modal>
	);
};
