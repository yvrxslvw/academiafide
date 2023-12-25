import { Dispatch, FC, SetStateAction } from 'react';
import { Navigate } from 'react-router-dom';
import {
	DeleteAccountButton,
	EditAccountButton,
	RecoveryPasswordButton,
	RolesButton,
	RolesSection,
	UsersButton,
} from 'features/UserCard';
import { UserCard } from 'entities/user';
import { API_URL, PublicRouterPaths } from 'shared/constants';
import { Icons } from 'shared/assets';
import { UserInfo } from 'shared/api';
import cl from './style.module.scss';

interface UserProps {
	userInfo: UserInfo;
	setEditProfileShown: Dispatch<SetStateAction<boolean>>;
}

export const User: FC<UserProps> = ({ userInfo, setEditProfileShown }) => {
	return (
		<div className={cl.Block}>
			{userInfo ? (
				<UserCard
					username={userInfo.login}
					imageSrc={userInfo.image ? `${API_URL}/${userInfo.image}` : Icons.ChessFigure}
				>
					<RolesSection roles={userInfo.roles} />
					<section className={cl.ButtonSection}>
						<EditAccountButton accountLogin={userInfo.login} setModalShown={setEditProfileShown} />
						<RecoveryPasswordButton accountLogin={userInfo.login} />
						<DeleteAccountButton accountLogin={userInfo.login} />
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
