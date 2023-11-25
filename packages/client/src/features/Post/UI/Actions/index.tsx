import { FC, useState, Dispatch, SetStateAction } from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, isAdmin, useAppSelector } from 'shared';
import cl from './style.module.scss';

interface ActionsProps {
	id: number;
	setDeleteModalShown: Dispatch<SetStateAction<boolean>>;
	setDeletionId: Dispatch<SetStateAction<number>>;
	setEditModalShown: Dispatch<SetStateAction<boolean>>;
	setEditionId: Dispatch<SetStateAction<number>>;
}

export const Actions: FC<ActionsProps> = ({
	id,
	setDeleteModalShown,
	setDeletionId,
	setEditModalShown,
	setEditionId,
}) => {
	const { userInfo } = useAppSelector(state => state.user);
	const [menuShown, setMenuShown] = useState(false);

	const onClickOpenHandler = () => {
		setMenuShown(prev => !prev);
	};

	const onClickEditHandler = () => {
		setMenuShown(false);
		setEditionId(id);
		setEditModalShown(true);
	};

	const onClickDeleteHandler = () => {
		setMenuShown(false);
		setDeletionId(id);
		setDeleteModalShown(true);
	};

	if (!isAdmin(userInfo)) return null;
	else
		return (
			<Dropdown.Menu
				initialButton={
					<button className={cl.Button} onClick={onClickOpenHandler}>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				}
				shown={menuShown}
			>
				<Dropdown.Item onClick={onClickEditHandler}>Editar</Dropdown.Item>
				<Dropdown.Item onClick={onClickDeleteHandler}>Eliminar</Dropdown.Item>
			</Dropdown.Menu>
		);
};
