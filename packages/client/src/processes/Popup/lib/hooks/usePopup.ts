import { timer } from 'shared/utils';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { PopupSlice } from 'entities/popup';

export const usePopup = () => {
	const { totalCount } = useAppSelector(state => state.popup);
	const dispatch = useAppDispatch();
	const { showPopup, deletePopup } = PopupSlice.actions;

	const createPopup = async (content: string) => {
		dispatch(showPopup(content));
		await timer(5 * 1000);
		dispatch(deletePopup(totalCount + 1));
	};

	return { createPopup };
};
