import { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'shared/UI';

interface EditRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const EditRoleModal: FC<EditRoleModalProps> = ({ shown, setShown }) => {
	return <Modal title='Редактирование роли' shown={shown} setShown={setShown}></Modal>;
};
