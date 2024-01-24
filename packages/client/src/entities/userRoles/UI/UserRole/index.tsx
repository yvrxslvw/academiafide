import { FC } from 'react';
import cn from 'classnames';
import { IRole } from 'shared/models';
import cl from './style.module.scss';

interface UserRoleProps {
	role: IRole;
	isExist: boolean;
}

export const UserRole: FC<UserRoleProps> = ({ role, isExist }) => {
	if (role.tag === 'USER') return null;

	return (
		<div className={cl.UserRole}>
			<p>{role.description}</p>
			<button className={cn({ [cl.Delete]: isExist })}>{isExist ? 'Удалить' : 'Добавить'}</button>
		</div>
	);
};
