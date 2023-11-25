import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import cl from './style.module.scss';
import { useAppDispatch } from 'shared';
import { PopupSlice } from 'entities';

interface CloseButtonProps {
	id: number;
}

export const CloseButton: FC<CloseButtonProps> = ({ id }) => {
	const dispatch = useAppDispatch();
	const { deletePopup } = PopupSlice.actions;

	const onClickHandler = () => {
		dispatch(deletePopup(id));
	};

	return (
		<button className={cl.CloseButton} onClick={onClickHandler}>
			<FontAwesomeIcon icon={faXmark} />
		</button>
	);
};
