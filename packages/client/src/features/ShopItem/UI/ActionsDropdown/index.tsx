import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'shared/hooks';
import { isAdmin, timer } from 'shared/utils';
import { Dropdown } from 'shared/UI';
import cl from './style.module.scss';

interface ActionsDropdownProps {
	productId: number;
	onEditHandler: (id: number) => void;
	onDeleteHandler: (id: number) => void;
}

export const ActionsDropdown: FC<ActionsDropdownProps> = ({ productId, onEditHandler, onDeleteHandler }) => {
	const { t } = useTranslation();
	const [isMenuShown, setIsMenuShown] = useState(false);
	const { userInfo } = useAppSelector(state => state.user);

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

	if (!isAdmin(userInfo)) return null;
	else
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
				<Dropdown.Item onClick={onClickEditHandler}>{t('Editar')}</Dropdown.Item>
				<Dropdown.Item onClick={onClickDeleteHandler}>{t('Eliminar')}</Dropdown.Item>
			</Dropdown.Menu>
		);
};
