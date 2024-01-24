import { Dispatch, FC, SetStateAction } from 'react';
import { Navigate } from 'react-router-dom';
import { DeleteAccountButton, EditAccountButton, RolesButton, RolesSection, UsersButton } from 'features/UserCard';
import { UserCard } from 'entities/user';
import { API_URL, PublicRouterPaths } from 'shared/constants';
import { Icons } from 'shared/assets';
import { UserInfo } from 'shared/api';
import cl from './style.module.scss';

interface UserProps {
	userInfo: UserInfo;
	setEditProfileShown: Dispatch<SetStateAction<boolean>>;
	setRolesModalShown: Dispatch<SetStateAction<boolean>>;
	setDeleteModalShown: Dispatch<SetStateAction<boolean>>;
}

export const User: FC<UserProps> = ({ userInfo, setEditProfileShown, setRolesModalShown, setDeleteModalShown }) => {
	return (
		<div className={cl.Block}>
			{userInfo ? (
				<UserCard
					username={userInfo.login}
					imageSrc={userInfo.image ? `${API_URL}/${userInfo.image}` : Icons.ChessFigure}
				>
					<RolesSection userId={userInfo.id} roles={userInfo.roles} setRolesModalShown={setRolesModalShown} />
					<section className={cl.ButtonSection}>
						<EditAccountButton accountLogin={userInfo.login} setModalShown={setEditProfileShown} />
						<DeleteAccountButton userId={userInfo.id} setModalShown={setDeleteModalShown} />
						<RolesButton accountLogin={userInfo.login} />
						<UsersButton accountLogin={userInfo.login} />
					</section>
				</UserCard>
			) : (
				<Navigate to={PublicRouterPaths.MAIN_PAGE} replace />
			)}
		</div>
	);
};
