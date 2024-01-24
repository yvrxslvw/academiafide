import { FC, useState } from 'react';
import { AddNewRoleModal, DeleteRoleModal, EditRoleModal, RoleList } from 'widgets/roles';
import cl from './style.module.scss';

export const RolesPage: FC = () => {
	const [addNewModalShown, setAddNewModalShown] = useState(false);
	const [editModalShown, setEditModalShown] = useState(false);
	const [deleteModalShown, setDeleteModalShown] = useState(false);

	return (
		<div className={cl.Container}>
			<RoleList
				setAddNewRoleModalShown={setAddNewModalShown}
				setEditRoleModalShown={setEditModalShown}
				setDeleteRoleModalShown={setDeleteModalShown}
			/>

			<AddNewRoleModal shown={addNewModalShown} setShown={setAddNewModalShown} />
			<EditRoleModal shown={editModalShown} setShown={setEditModalShown} />
			<DeleteRoleModal shown={deleteModalShown} setShown={setDeleteModalShown} />
		</div>
	);
};
