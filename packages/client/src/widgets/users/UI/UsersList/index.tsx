import { UserRow } from 'entities/user';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/UI';
import { useGetAllUsersQuery } from 'shared/api';

export const UsersList: FC = () => {
	const { data, isLoading, isError } = useGetAllUsersQuery();
	const { t } = useTranslation();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')
			) : (
				data && data.map(user => <UserRow key={user.id} />)
			)}
		</>
	);
};
