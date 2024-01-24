import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { AddNewButton } from 'features/RoleList';
import { RoleRow } from 'entities/role';
import { useGetAllRolesQuery } from 'shared/api';
import { Loader } from 'shared/UI';
import cl from './style.module.scss';

interface RoleListProps {
	setAddNewRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setEditRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setDeleteRoleModalShown: Dispatch<SetStateAction<boolean>>;
}

export const RoleList: FC<RoleListProps> = ({
	setAddNewRoleModalShown,
	setEditRoleModalShown,
	setDeleteRoleModalShown,
}) => {
	const { data, isError, isLoading } = useGetAllRolesQuery();
	const { t } = useTranslation();

	return (
		<div className={cl.RoleList}>
			<h2>{t('Lista de roles')}</h2>
			<section className={cl.ButtonSection}>
				<AddNewButton setModalShown={setAddNewRoleModalShown} />
			</section>
			{isLoading ? (
				<Loader />
			) : isError ? (
				t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')
			) : (
				data &&
				data.map(role => (
					<RoleRow
						key={role.id}
						role={role}
						setEditRoleModalShown={setEditRoleModalShown}
						setDeleteRoleModalShown={setDeleteRoleModalShown}
					/>
				))
			)}
		</div>
	);
};
