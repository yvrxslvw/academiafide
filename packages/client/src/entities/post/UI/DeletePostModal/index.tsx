import { FC, Dispatch, SetStateAction, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IPost, Modal, Paragraph } from 'shared';
import cl from './style.module.scss';

interface DeletePostModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	post: IPost | undefined;
	confirmButton: ReactNode;
}

export const DeletePostModal: FC<DeletePostModalProps> = ({ shown, setShown, post, confirmButton }) => {
	const { t } = useTranslation();

	return (
		<Modal shown={shown} setShown={setShown} title={t('Eliminar una publicación')} className={cl.Modal}>
			<Paragraph>{t('¿Estás seguro de que quieres eliminar la publicación')} &quot;{post?.title}&quot;?</Paragraph>
			<section className={cl.ButtonBody}>{confirmButton}</section>
		</Modal>
	);
};
