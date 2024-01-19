import { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'shared/UI';
// import { useGetAllRolesQuery } from 'shared/api';
import { IRole } from 'shared/models';

interface RolesModalProps {
	roles: IRole[];
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const RolesModal: FC<RolesModalProps> = ({ shown, setShown }) => {
	// const { data, isError, isLoading } = useGetAllRolesQuery();

	return (
		<Modal title='Роли пользователя' shown={shown} setShown={setShown}>

		</Modal>
	);
};
