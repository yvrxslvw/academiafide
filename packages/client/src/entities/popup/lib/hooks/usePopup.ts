import { timer, useAppDispatch, useAppSelector } from 'shared';
import { PopupSlice } from '../../models';

export const usePopup = () => {
	const { totalCount } = useAppSelector(state => state.popup);
	const dispatch = useAppDispatch();
	const { showPopup, deletePopup } = PopupSlice.actions;

	const createPopup = async (content: string) => {
		dispatch(showPopup(content));
		await timer(3 * 1000);
		dispatch(deletePopup(totalCount + 1));
	};

	return { createPopup };
};
