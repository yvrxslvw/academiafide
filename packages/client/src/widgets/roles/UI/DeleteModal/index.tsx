import { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'shared/UI';

interface DeleteRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteRoleModal: FC<DeleteRoleModalProps> = ({ shown, setShown }) => {
	return <Modal title='Удаление роли' shown={shown} setShown={setShown}></Modal>;
};
