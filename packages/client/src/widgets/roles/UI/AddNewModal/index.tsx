import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfirmAdditionButton, RoleDescriptionInput, RoleTagInput } from 'features/RoleList';
import { Modal } from 'shared/UI';
import cl from './style.module.scss';

interface AddNewRoleModalProps {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddNewRoleModal: FC<AddNewRoleModalProps> = ({ shown, setShown, refetch }) => {
	const [tag, setTag] = useState('');
	const [description, setDescription] = useState('');
	const { t } = useTranslation();

	return (
		<Modal title={t('Adición de role')} shown={shown} setShown={setShown} className={cl.AddNewModal}>
			<RoleTagInput tag={tag} setTag={setTag} />
			<RoleDescriptionInput description={description} setDescription={setDescription} />
			<section className={cl.ButtonSection}>
				<ConfirmAdditionButton
					tag={tag}
					description={description}
					refetch={refetch}
					setTag={setTag}
					setDescription={setDescription}
					setModalShown={setShown}
				/>
			</section>
		</Modal>
	);
};
