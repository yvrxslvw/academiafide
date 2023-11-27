import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Modal, Paragraph } from 'shared';
import cl from './style.module.scss';

interface DeleteModalProps {
	productTitle: string;
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	nextButton: ReactNode;
}

export const DeleteModal: FC<DeleteModalProps> = ({ productTitle, isModalShown, setIsModalShown, nextButton }) => {
	return (
		<Modal title='Eliminar un producto' shown={isModalShown} setShown={setIsModalShown} className={cl.Modal}>
			<Paragraph>¿Estás seguro de que deseas eliminar el producto: &quot;{productTitle}&quot;?</Paragraph>
			<section className={cl.ButtonBody}>{nextButton}</section>
		</Modal>
	);
};
