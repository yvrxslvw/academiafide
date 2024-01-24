import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfirmDeletionButton } from 'features/UserCard';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface DeleteModalProps {
	userId: number;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteModal: FC<DeleteModalProps> = ({ userId, shown, setShown }) => {
	const { t } = useTranslation();

	return (
		<Modal title={t('Eliminación de cuenta')} shown={shown} setShown={setShown} className={cl.DeleteModal}>
			<p>{t('¿Estás seguro de que deseas eliminar la cuenta de este usuario?')}</p>
			<section className={cl.ButtonSection}>
				<ConfirmDeletionButton userId={userId} setModalShown={setShown} />
			</section>
		</Modal>
	);
};
