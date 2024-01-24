import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { UserRole } from 'entities/userRoles';
import { Loader, Modal } from 'shared/UI';
import { useGetAllRolesQuery } from 'shared/api';
import { IRole } from 'shared/models';

interface RolesModalProps {
	roles: IRole[];
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const RolesModal: FC<RolesModalProps> = ({ roles, shown, setShown, refetch }) => {
	const { data, isLoading } = useGetAllRolesQuery();
	const { t } = useTranslation();

	return (
		<Modal title={t('Roles del usuario')} shown={shown} setShown={setShown}>
			{data ? (
				data.map(role => (
					<UserRole
						key={role.id}
						role={role}
						isExist={roles.findIndex(userRole => userRole.id === role.id) !== -1}
						refetch={refetch}
					/>
				))
			) : isLoading ? (
				<Loader />
			) : (
				t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.')
			)}
		</Modal>
	);
};
