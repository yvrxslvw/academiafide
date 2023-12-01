import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/UI';
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
	const { t } = useTranslation();

	return (
		<Modal shown={modalShown} setShown={setModalShown} title={t('Agregando una nueva publicación')}>
			<section className={cl.Item}>{titleTextArea}</section>
			<section className={cl.Item}>{contentTextArea}</section>
			<section className={cl.Item}>{imageFileInput}</section>
			<section className={cl.Button}>{nextButton}</section>
		</Modal>
	);
};
