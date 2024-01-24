import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfirmDeletionButton } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface DeleteRoleModalProps {
	id: number;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteRoleModal: FC<DeleteRoleModalProps> = ({ id, shown, setShown }) => {
	const { t } = useTranslation();

	return (
		<Modal title={t('Eliminación de role')} shown={shown} setShown={setShown} className={cl.DeleteRoleModal}>
			<p>{t('¿Está seguro de que desea eliminar este rol?')}</p>
			<section className={cl.ButtonSection}>
				<ConfirmDeletionButton id={id} />
			</section>
		</Modal>
	);
};
