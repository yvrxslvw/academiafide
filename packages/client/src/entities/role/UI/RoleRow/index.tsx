import { FC } from 'react';
import { IRole } from 'shared/models';
import cl from './style.module.scss';

interface RoleRowProps {
	role: IRole;
}

export const RoleRow: FC<RoleRowProps> = ({ role }) => {
	if (role.tag === 'USER' || role.tag === 'ADMIN') return null;

	return (
		<div className={cl.RoleRow}>
			<p>
				ID {role.id}: {role.description}
			</p>
			<section className={cl.ButtonSection}>
				<button className={cl.EditButton}>Изменить</button>
				<button className={cl.DeleteButton}>Удалить</button>
			</section>
		</div>
	);
};
