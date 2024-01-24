import { FC } from 'react';
import { RoleList } from 'widgets/roles';
import cl from './style.module.scss';

export const RolesPage: FC = () => {
	return (
		<div className={cl.Container}>
			<RoleList />
		</div>
	);
};
