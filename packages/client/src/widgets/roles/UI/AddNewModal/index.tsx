import { Dispatch, FC, SetStateAction, useState } from 'react';
import { ConfirmAdditionButton, RoleDescriptionInput, RoleTagInput } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface AddNewRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewRoleModal: FC<AddNewRoleModalProps> = ({ shown, setShown }) => {
	const [tag, setTag] = useState('');
	const [description, setDescription] = useState('');

	return (
		<Modal title='Добавление роли' shown={shown} setShown={setShown} className={cl.AddNewModal}>
			<RoleTagInput tag={tag} setTag={setTag} />
			<RoleDescriptionInput description={description} setDescription={setDescription} />
			<section className={cl.ButtonSection}>
				<ConfirmAdditionButton tag={tag} description={description} />
			</section>
		</Modal>
	);
};
