import { FC, PropsWithChildren } from 'react';
import { Card } from 'entities/card';
import { Images } from 'shared/assets';
import cl from './style.module.scss';
import { Paragraph } from 'shared/UI';

interface UserCardProps extends PropsWithChildren {}

export const UserCard: FC<UserCardProps> = () => {
	return (
		<Card title='Adrian' className={cl.UserCard}>
			<img src={Images.AdrianImage} alt="User" className={cl.UserImage} />
			<section className={cl.RolesSection}>
				<Paragraph>Roles:</Paragraph>
			</section>
		</Card>
	);
};
