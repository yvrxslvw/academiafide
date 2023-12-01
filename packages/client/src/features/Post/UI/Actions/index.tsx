import { FC, useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'shared/hooks';
import { isAdmin, timer } from 'shared/utils';
import { Dropdown } from 'shared/UI';
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
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);
	const [menuShown, setMenuShown] = useState(false);

	const onClickOpenHandler = () => {
		setMenuShown(prev => !prev);
	};

	const onMouseEnterHandler = () => {
		setMenuShown(true);
	};

	const onMouseLeaveHandler = async () => {
		await timer(500);
		setMenuShown(false);
	};

	const onClickEditHandler = () => {
		setEditionId(id);
		setEditModalShown(true);
	};

	const onClickDeleteHandler = () => {
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
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				<Dropdown.Item onClick={onClickEditHandler}>{t('Editar')}</Dropdown.Item>
				<Dropdown.Item onClick={onClickDeleteHandler}>{t('Eliminar')}</Dropdown.Item>
			</Dropdown.Menu>
		);
};
