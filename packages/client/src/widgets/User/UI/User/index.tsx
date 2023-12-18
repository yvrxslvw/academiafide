import { FC } from 'react';
import { RolesSection } from 'features/UserCard';
import { UserCard } from 'entities/user';
import { Images } from 'shared/assets';
import cl from './style.module.scss';
import { useLocation } from 'react-router-dom';

export const User: FC = () => {
	const location = useLocation();

	return (
		<div className={cl.Block}>
			<UserCard imageSrc={Images.AdrianImage}>
				<RolesSection username={location.pathname.slice(7)} />
				<section className={cl.ButtonSection}>
					<button>Editar cuenta</button>
					<button>Restablecer la contraseña</button>
					<button>Borrar cuenta</button>
				</section>
			</UserCard>
		</div>
	);
};
