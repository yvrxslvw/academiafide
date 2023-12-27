import { FC, useState } from 'react';
import { EditProfileModal, User } from 'widgets/User';
import cl from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { useGetUserByNameQuery } from 'shared/api';
import { Loader } from 'shared/UI';

export const UserPage: FC = () => {
	const location = useLocation();
	const { data, isLoading, refetch } = useGetUserByNameQuery(location.pathname.slice(7));
	const [editProfileShown, setEditProfileShown] = useState(false);

	if (isLoading || !data) return <Loader />;

	return (
		<div className={cl.Container}>
			<User userInfo={data} setEditProfileShown={setEditProfileShown} />

			<EditProfileModal userInfo={data} shown={editProfileShown} setShown={setEditProfileShown} refetch={refetch} />
		</div>
	);
};
