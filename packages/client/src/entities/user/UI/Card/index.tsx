import { FC, PropsWithChildren } from 'react';
import { Card } from 'entities/card';
import { Images } from 'shared/assets';
import { Paragraph, RoleTag } from 'shared/UI';
import cl from './style.module.scss';

interface UserCardProps extends PropsWithChildren {}

export const UserCard: FC<UserCardProps> = () => {
	return (
		<Card title='Adrian' className={cl.UserCard}>
			<img src={Images.AdrianImage} alt='User' className={cl.UserImage} />
			<section className={cl.RolesSection}>
				<Paragraph>Roles:</Paragraph>
				<section className={cl.RolesRow}>
					<RoleTag tag='USER' className={cl.RoleItem} />
					<RoleTag tag='ADMIN' className={cl.RoleItem} />
					<RoleTag tag='TRAINER' className={cl.RoleItem} />
				</section>
			</section>
			<section className={cl.ButtonSection}>
				<button>Editar cuenta</button>
				<button>Restablecer la contraseña</button>
				<button>Borrar cuenta</button>
			</section>
		</Card>
	);
};
