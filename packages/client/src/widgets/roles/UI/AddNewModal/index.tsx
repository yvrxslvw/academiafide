import { Dispatch, FC, SetStateAction } from 'react';
import { Modal } from 'shared/UI';

interface AddNewRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewRoleModal: FC<AddNewRoleModalProps> = ({ shown, setShown }) => {
	return <Modal title='Добавление роли' shown={shown} setShown={setShown}></Modal>;
};
