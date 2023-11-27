import { FC, useState } from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, timer } from 'shared';
import cl from './style.module.scss';

interface ActionsDropdownProps {
	productId: number;
	onEditHandler: (id: number) => void;
	onDeleteHandler: (id: number) => void;
}

export const ActionsDropdown: FC<ActionsDropdownProps> = ({ productId, onEditHandler, onDeleteHandler }) => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const onMenuClickHandler = () => {
		setIsMenuShown(prev => !prev);
	};

	const onMouseEnterHandler = () => {
		setIsMenuShown(true);
	};

	const onMouseLeaveHandler = async () => {
		await timer(500);
		setIsMenuShown(false);
	};

	const onClickEditHandler = () => {
		onEditHandler(productId);
	};

	const onClickDeleteHandler = () => {
		onDeleteHandler(productId);
	};

	return (
		<Dropdown.Menu
			initialButton={
				<button className={cl.Dropdown} onClick={onMenuClickHandler}>
					<FontAwesomeIcon icon={faEllipsisVertical} />
				</button>
			}
			shown={isMenuShown}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			<Dropdown.Item onClick={onClickEditHandler}>Editar</Dropdown.Item>
			<Dropdown.Item onClick={onClickDeleteHandler}>Eliminar</Dropdown.Item>
		</Dropdown.Menu>
	);
};
