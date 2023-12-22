import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
	DeleteAccountButton,
	EditAccountButton,
	RecoveryPasswordButton,
	RolesButton,
	RolesSection,
	UsersButton,
} from 'features/UserCard';
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
				<UserCard username={data.login} imageSrc={data.image ? `${API_URL}/${data.image}` : Icons.ChessFigure}>
					<RolesSection roles={data.roles} />
					<section className={cl.ButtonSection}>
						<EditAccountButton />
						<RecoveryPasswordButton />
						<DeleteAccountButton />
						<RolesButton />
						<UsersButton />
					</section>
				</UserCard>
			) : (
				<Navigate to={PublicRouterPaths.MAIN_PAGE} replace />
			)}
		</div>
	);
};
