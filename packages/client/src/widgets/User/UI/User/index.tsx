import { FC } from 'react';
import { UserCard } from 'entities/user';
import cl from './style.module.scss';

export const User: FC = () => {
	return (
		<div className={cl.Block}>
			<UserCard />
		</div>
	);
};
