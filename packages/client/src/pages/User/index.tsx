import { FC, useState } from 'react';
import { ConfirmEmailModal, DeleteModal, EditProfileModal, RolesModal, User } from 'widgets/User';
import cl from './style.module.scss';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserByNameQuery } from 'shared/api';
import { Loader } from 'shared/UI';
import { useAppSelector } from 'shared/hooks';
import { PublicRouterPaths } from 'shared/constants';

export const UserPage: FC = () => {
	const location = useLocation();
	const { data, isLoading, isError, refetch } = useGetUserByNameQuery(location.pathname.slice(7), {
		refetchOnMountOrArgChange: true,
	});
	const { userInfo } = useAppSelector(state => state.user);

	const [editProfileShown, setEditProfileShown] = useState(false);
	const [confirmEmailShown, setConfirmEmailShown] = useState(false);
	const [rolesShown, setRolesShown] = useState(false);
	const [deleteAccountShown, setDeleteAccountShown] = useState(false);

	if (isError) return <Navigate to={PublicRouterPaths.MAIN_PAGE} replace />;
	if (isLoading || !data) return <Loader />;

	return (
		<div className={cl.Container}>
			<User
				userInfo={data}
				setEditProfileShown={setEditProfileShown}
				setRolesModalShown={setRolesShown}
				setDeleteModalShown={setDeleteAccountShown}
			/>

			<EditProfileModal
				userInfo={data}
				shown={editProfileShown}
				refetch={refetch}
				setShown={setEditProfileShown}
				setShownConfirmEmailModal={setConfirmEmailShown}
				isSelf={data.login === userInfo.login}
			/>
			<ConfirmEmailModal
				email={data.email}
				shown={confirmEmailShown}
				setShown={setConfirmEmailShown}
				refetch={refetch}
			/>
			<RolesModal userId={data.id} roles={data.roles} shown={rolesShown} setShown={setRolesShown} refetch={refetch} />
			<DeleteModal userId={data.id} shown={deleteAccountShown} setShown={setDeleteAccountShown} />
		</div>
	);
};
