import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { UserRow } from 'entities/user';
import { Loader } from 'shared/UI';
import { useGetAllUsersQuery } from 'shared/api';
import cl from './style.module.scss';

export const UsersList: FC = () => {
	const { data, isLoading, isError, refetch } = useGetAllUsersQuery();
	const { t } = useTranslation();

	useEffect(() => {
		refetch();
	}, []);

	return (
		<div className={cl.UsersList}>
			<h2>{t('Lista de usuarios')}</h2>
			{isLoading ? (
				<Loader />
			) : isError ? (
				t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')
			) : (
				data && data.map(user => <UserRow key={user.id} user={user} />)
			)}
		</div>
	);
};
