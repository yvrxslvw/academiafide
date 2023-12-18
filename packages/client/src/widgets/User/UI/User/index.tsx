import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RolesSection } from 'features/UserCard';
import { UserCard } from 'entities/user';
import { useGetUserByNameQuery } from 'shared/api';
import { API_URL, PublicRouterPaths } from 'shared/constants';
import { Loader } from 'shared/UI';
import { Icons } from 'shared/assets';
import cl from './style.module.scss';

export const User: FC = () => {
	const location = useLocation();
	const { data, isLoading } = useGetUserByNameQuery(location.pathname.slice(7));

	if (isLoading) return <Loader />;

	return (
		<div className={cl.Block}>
			{data ? (
				// todo: Make no image avatar
				<UserCard username={data.login} imageSrc={data.image ? `${API_URL}/${data.image}` : Icons.ChessFigure}>
					<RolesSection roles={data.roles} />
					<section className={cl.ButtonSection}>
						<button>Editar cuenta</button>
						<button>Restablecer la contraseña</button>
						<button>Borrar cuenta</button>
					</section>
				</UserCard>
			) : (
				<Navigate to={PublicRouterPaths.MAIN_PAGE} replace />
			)}
		</div>
	);
};
