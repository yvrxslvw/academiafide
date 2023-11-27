import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared';
import cl from './style.module.scss';

interface EditPostModalProps {
	modalShown: boolean;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	titleTextArea: ReactNode;
	contentTextArea: ReactNode;
	imageFileInput: ReactNode;
	nextButton: ReactNode;
}

export const EditPostModal: FC<EditPostModalProps> = ({
	modalShown,
	setModalShown,
	titleTextArea,
	contentTextArea,
	imageFileInput,
	nextButton,
}) => {
	const { t } = useTranslation();

	return (
		<Modal shown={modalShown} setShown={setModalShown} title={t('Editar una publicación')}>
			<section className={cl.Item}>{titleTextArea}</section>
			<section className={cl.Item}>{contentTextArea}</section>
			<section className={cl.Item}>{imageFileInput}</section>
			<section className={cl.Button}>{nextButton}</section>
		</Modal>
	);
};
