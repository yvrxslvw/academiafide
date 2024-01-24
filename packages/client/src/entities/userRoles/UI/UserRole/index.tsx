import { FC } from 'react';
import { RoleButton } from 'features/UserRoles';
import { IRole } from 'shared/models';
import cl from './style.module.scss';

interface UserRoleProps {
	role: IRole;
	isExist: boolean;
	refetch: () => void;
}

export const UserRole: FC<UserRoleProps> = ({ role, isExist, refetch }) => {
	if (role.tag === 'USER') return null;

	return (
		<div className={cl.UserRole}>
			<p>{role.description}</p>
			<RoleButton isExist={isExist} tag={role.tag} refetch={refetch} />
		</div>
	);
};
