import { FC, PropsWithChildren } from 'react';
import { Card } from 'entities/card';
import cl from './style.module.scss';

interface UserCardProps extends PropsWithChildren {
	username: string;
	imageSrc: string;
}

export const UserCard: FC<UserCardProps> = ({ username, imageSrc, children }) => {
	return (
		<Card title={username} className={cl.UserCard}>
			<img src={imageSrc} alt='User' className={cl.UserImage} />
			{children}
		</Card>
	);
};
