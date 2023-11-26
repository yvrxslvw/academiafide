import { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'shared';

interface CreateProductModalProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const CreateProductModal: FC<CreateProductModalProps> = ({ isModalShown, setIsModalShown }) => {
	return <Modal shown={isModalShown} setShown={setIsModalShown} title='Agregar un nuevo producto'></Modal>;
};
