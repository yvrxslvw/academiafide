import { createSlice } from '@reduxjs/toolkit';
import { IPopup } from 'shared';
import { showPopup, deletePopup } from './Popup.actions';

export interface PopupState {
	entries: Record<number, IPopup>;
	totalCount: number;
}

const initialState: PopupState = {
	entries: {},
	totalCount: 0,
};

const PopupSlice = createSlice({
	name: 'Popup',
	initialState,
	reducers: {
		showPopup,
		deletePopup,
	},
});

export const { actions, reducer } = PopupSlice;
