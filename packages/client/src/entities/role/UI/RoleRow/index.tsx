import { Dispatch, FC, SetStateAction } from 'react';
import { IRole } from 'shared/models';
import cl from './style.module.scss';
import { DeleteButton, EditButton } from 'features/RoleList';

interface RoleRowProps {
	role: IRole;
	setEditRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setDeleteRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setEditionId: Dispatch<SetStateAction<number>>;
	setDeletionId: Dispatch<SetStateAction<number>>;
}

export const RoleRow: FC<RoleRowProps> = ({
	role,
	setEditRoleModalShown,
	setDeleteRoleModalShown,
	setEditionId,
	setDeletionId,
}) => {
	if (role.tag === 'USER' || role.tag === 'ADMIN') return null;

	return (
		<div className={cl.RoleRow}>
			<p>
				ID {role.id}: {role.description}
			</p>
			<section className={cl.ButtonSection}>
				<EditButton id={role.id} setModalShown={setEditRoleModalShown} setEditionId={setEditionId} />
				<DeleteButton id={role.id} setModalShown={setDeleteRoleModalShown} setDeletionId={setDeletionId} />
			</section>
		</div>
	);
};
