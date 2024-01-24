import { FC } from 'react';
import { UsersList } from 'widgets/users';
import cl from './style.module.scss';

export const UsersPage: FC = () => {
	return (
		<div className={cl.Container}>
			<UsersList />
		</div>
	);
};
