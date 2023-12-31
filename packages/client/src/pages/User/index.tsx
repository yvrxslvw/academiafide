import { FC, useState } from 'react';
import { ConfirmEmailModal, EditProfileModal, User } from 'widgets/User';
import cl from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { useGetUserByNameQuery } from 'shared/api';
import { Loader } from 'shared/UI';
import { useAppSelector } from 'shared/hooks';

export const UserPage: FC = () => {
	const location = useLocation();
	const { data, isLoading, refetch } = useGetUserByNameQuery(location.pathname.slice(7));
	const { userInfo } = useAppSelector(state => state.user);
	const [editProfileShown, setEditProfileShown] = useState(false);
	const [confirmEmailShown, setConfirmEmailShown] = useState(false);

	if (isLoading || !data) return <Loader />;

	return (
		<div className={cl.Container}>
			<User userInfo={data} setEditProfileShown={setEditProfileShown} />

			<EditProfileModal
				userInfo={data}
				shown={editProfileShown}
				setShown={setEditProfileShown}
				setShownConfirmEmailModal={setConfirmEmailShown}
				isSelf={data.login === userInfo.login}
			/>
			<ConfirmEmailModal email={data.email} shown={confirmEmailShown} setShown={setConfirmEmailShown} refetch={refetch} />
		</div>
	);
};
