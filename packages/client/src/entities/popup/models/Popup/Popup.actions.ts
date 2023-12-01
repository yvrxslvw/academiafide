import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { IPopup } from 'shared/models';
import { PopupState } from './Popup.slice';

type State = CombinedState<PopupState>;

export const showPopup = (state: State, action: PayloadAction<string>) => {
	const popup: IPopup = {
		id: state.totalCount + 1,
		content: action.payload,
	};

	state.entries[popup.id] = popup;
	state.totalCount += 1;
};

export const deletePopup = (state: State, action: PayloadAction<number>) => {
	delete state.entries[action.payload];
};
