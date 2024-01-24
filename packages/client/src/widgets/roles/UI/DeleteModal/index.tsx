import { Dispatch, FC, SetStateAction } from 'react';
import { ConfirmDeletionButton } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface DeleteRoleModalProps {
	id: number;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteRoleModal: FC<DeleteRoleModalProps> = ({ id, shown, setShown }) => {
	return (
		<Modal title='Удаление роли' shown={shown} setShown={setShown} className={cl.DeleteRoleModal}>
			<p>Вы уверены что хотите удалить эту роль?</p>
			<section className={cl.ButtonSection}>
				<ConfirmDeletionButton id={id} />
			</section>
		</Modal>
	);
};
