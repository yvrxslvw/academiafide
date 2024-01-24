import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfirmEditionButton, RoleDescriptionInput, RoleTagInput } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';
import { IRole } from 'shared/models';

interface EditRoleModalProps {
	id: number;
	role: IRole | undefined;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const EditRoleModal: FC<EditRoleModalProps> = ({ id, role, shown, setShown, refetch }) => {
	const [tag, setTag] = useState('');
	const [description, setDescription] = useState('');
	const { t } = useTranslation();

	useEffect(() => {
		if (role) {
			setTag(role.tag);
			setDescription(role.description);
		}
	}, [role]);

	return (
		<Modal title={t('Edición de role')} shown={shown} setShown={setShown} className={cl.EditRoleModal}>
			<RoleTagInput tag={tag} setTag={setTag} />
			<RoleDescriptionInput description={description} setDescription={setDescription} />
			<section className={cl.ButtonSection}>
				<ConfirmEditionButton id={id} tag={tag} description={description} setModalShown={setShown} refetch={refetch} />
			</section>
		</Modal>
	);
};
