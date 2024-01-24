import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { AddNewButton } from 'features/RoleList';
import { RoleRow } from 'entities/role';
import { Loader } from 'shared/UI';
import cl from './style.module.scss';
import { IRole } from 'shared/models';

interface RoleListProps {
	roles: IRole[];
	isError: boolean;
	isLoading: boolean;
	setAddNewRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setEditRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setDeleteRoleModalShown: Dispatch<SetStateAction<boolean>>;
	setEditionId: Dispatch<SetStateAction<number>>;
	setDeletionId: Dispatch<SetStateAction<number>>;
}

export const RoleList: FC<RoleListProps> = ({
	roles,
	isError,
	isLoading,
	setAddNewRoleModalShown,
	setEditRoleModalShown,
	setDeleteRoleModalShown,
	setEditionId,
	setDeletionId,
}) => {
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
				roles &&
				roles.map(role => (
					<RoleRow
						key={role.id}
						role={role}
						setEditRoleModalShown={setEditRoleModalShown}
						setDeleteRoleModalShown={setDeleteRoleModalShown}
						setEditionId={setEditionId}
						setDeletionId={setDeletionId}
					/>
				))
			)}
		</div>
	);
};
