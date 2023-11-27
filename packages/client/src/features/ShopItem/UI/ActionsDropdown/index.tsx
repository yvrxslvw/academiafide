import { FC, PropsWithChildren, useState } from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, timer } from 'shared';
import cl from './style.module.scss';

interface ActionsDropdownProps extends PropsWithChildren {}

export const ActionsDropdown: FC<ActionsDropdownProps> = () => {
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
		// eslint-disable-next-line no-console
		console.log('edit');
	};

	const onClickDeleteHandler = () => {
		// eslint-disable-next-line no-console
		console.log('delete');
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
