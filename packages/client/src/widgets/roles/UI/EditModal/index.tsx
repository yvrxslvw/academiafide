import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfirmEditionButton, RoleDescriptionInput, RoleTagInput } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface EditRoleModalProps {
	id: number;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const EditRoleModal: FC<EditRoleModalProps> = ({ id, shown, setShown }) => {
	const [tag, setTag] = useState('');
	const [description, setDescription] = useState('');
	const { t } = useTranslation();

	return (
		<Modal title={t('Edición de role')} shown={shown} setShown={setShown} className={cl.EditRoleModal}>
			<RoleTagInput tag={tag} setTag={setTag} />
			<RoleDescriptionInput description={description} setDescription={setDescription} />
			<section className={cl.ButtonSection}>
				<ConfirmEditionButton id={id} tag={tag} description={description} />
			</section>
		</Modal>
	);
};
