import { FC, useState } from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, isAdmin, useAppSelector } from 'shared';
import cl from './style.module.scss';

interface ActionsProps {
	id: number;
}

export const Actions: FC<ActionsProps> = ({ id }) => {
	const { userInfo } = useAppSelector(state => state.user);
	const [menuShown, setMenuShown] = useState(false);

	const onClickOpenHandler = () => {
		setMenuShown(prev => !prev);
	};

	const onClickEditHandler = () => {
		// eslint-disable-next-line no-console
		console.log('edit', id);
		setMenuShown(false);
	};

	const onClickDeleteHandler = () => {
		// eslint-disable-next-line no-console
		console.log('delete', id);
		setMenuShown(false);
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
