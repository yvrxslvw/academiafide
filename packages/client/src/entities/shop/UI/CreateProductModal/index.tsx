import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface CreateProductModalProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	titleInput: ReactNode;
	descriptionTextarea: ReactNode;
	priceInput: ReactNode;
	imageInput: ReactNode;
	nextButton: ReactNode;
}

export const CreateProductModal: FC<CreateProductModalProps> = ({
	isModalShown,
	setIsModalShown,
	titleInput,
	descriptionTextarea,
	priceInput,
	imageInput,
	nextButton,
}) => {
	const { t } = useTranslation();

	return (
		<Modal shown={isModalShown} setShown={setIsModalShown} title={t('Agregar un nuevo producto')}>
			<section className={cl.Item}>{titleInput}</section>
			<section className={cl.Item}>{priceInput}</section>
			<section className={cl.Item}>{descriptionTextarea}</section>
			<section className={cl.Item}>{imageInput}</section>
			<section className={cl.Item}>{nextButton}</section>
		</Modal>
	);
};
