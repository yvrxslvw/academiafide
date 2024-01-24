import { Dispatch, FC, SetStateAction } from 'react';
import { IRole } from 'shared/models';
import cl from './style.module.scss';
import { DeleteButton, EditButton } from 'features/RoleList';

interface RoleRowProps {
	role: IRole;
	setEditRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setDeleteRoleModalShown: Dispatch<SetStateAction<boolean>>;
}

export const RoleRow: FC<RoleRowProps> = ({ role, setEditRoleModalShown, setDeleteRoleModalShown }) => {
	if (role.tag === 'USER' || role.tag === 'ADMIN') return null;

	return (
		<div className={cl.RoleRow}>
			<p>
				ID {role.id}: {role.description}
			</p>
			<section className={cl.ButtonSection}>
				<EditButton setModalShown={setEditRoleModalShown} />
				<DeleteButton setModalShown={setDeleteRoleModalShown} />
			</section>
		</div>
	);
};
