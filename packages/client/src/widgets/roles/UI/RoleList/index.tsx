import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllRolesQuery } from 'shared/api';
import { Loader } from 'shared/UI';
import cl from './style.module.scss';
import { RoleRow } from 'entities/role';

export const RoleList: FC = () => {
	const { data, isError, isLoading } = useGetAllRolesQuery();
	const { t } = useTranslation();

	return (
		<div className={cl.RoleList}>
			<h2>Список ролей</h2>
			{isLoading ? (
				<Loader />
			) : isError ? (
				t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')
			) : (
				data && data.map(role => <RoleRow key={role.id} role={role} />)
			)}
		</div>
	);
};
