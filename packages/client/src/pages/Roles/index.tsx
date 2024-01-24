import { FC, useState } from 'react';
import { AddNewRoleModal, DeleteRoleModal, EditRoleModal, RoleList } from 'widgets/roles';
import cl from './style.module.scss';

export const RolesPage: FC = () => {
	const [addNewModalShown, setAddNewModalShown] = useState(false);
	const [editModalShown, setEditModalShown] = useState(false);
	const [deleteModalShown, setDeleteModalShown] = useState(false);
	const [editionId, setEditionId] = useState(-1);
	const [deletionId, setDeletionId] = useState(-1);

	return (
		<div className={cl.Container}>
			<RoleList
				setAddNewRoleModalShown={setAddNewModalShown}
				setEditRoleModalShown={setEditModalShown}
				setDeleteRoleModalShown={setDeleteModalShown}
				setEditionId={setEditionId}
				setDeletionId={setDeletionId}
			/>

			<AddNewRoleModal shown={addNewModalShown} setShown={setAddNewModalShown} />
			<EditRoleModal id={editionId} shown={editModalShown} setShown={setEditModalShown} />
			<DeleteRoleModal id={deletionId} shown={deleteModalShown} setShown={setDeleteModalShown} />
		</div>
	);
};
