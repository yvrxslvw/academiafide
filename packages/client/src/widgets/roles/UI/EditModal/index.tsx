import { Dispatch, FC, SetStateAction, useState } from 'react';
import { ConfirmEditionButton, RoleDescriptionInput, RoleTagInput } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface EditRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const EditRoleModal: FC<EditRoleModalProps> = ({ shown, setShown }) => {
	const [tag, setTag] = useState('');
	const [description, setDescription] = useState('');

	return (
		<Modal title='Редактирование роли' shown={shown} setShown={setShown} className={cl.EditRoleModal}>
			<RoleTagInput tag={tag} setTag={setTag} />
			<RoleDescriptionInput description={description} setDescription={setDescription} />
			<section className={cl.ButtonSection}>
				<ConfirmEditionButton />
			</section>
		</Modal>
	);
};
