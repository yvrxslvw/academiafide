import { FC } from 'react';
import { User } from 'widgets/User';
import cl from './style.module.scss';

export const UserPage: FC = () => {
	return (
		<div className={cl.Container}>
			<User />
		</div>
	);
};
