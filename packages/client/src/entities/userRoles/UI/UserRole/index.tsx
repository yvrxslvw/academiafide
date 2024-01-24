import { FC } from 'react';
import { IRole } from 'shared/models';
import cl from './style.module.scss';
import { RoleButton } from 'features/UserRoles';

interface UserRoleProps {
	role: IRole;
	isExist: boolean;
}

export const UserRole: FC<UserRoleProps> = ({ role, isExist }) => {
	if (role.tag === 'USER') return null;

	return (
		<div className={cl.UserRole}>
			<p>{role.description}</p>
			<RoleButton isExist={isExist} />
		</div>
	);
};
