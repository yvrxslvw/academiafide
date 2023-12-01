import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useAppDispatch } from 'shared/hooks';
import { PopupSlice } from 'entities/popup';
import cl from './style.module.scss';

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
