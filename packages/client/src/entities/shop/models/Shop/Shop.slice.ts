import { createSlice } from '@reduxjs/toolkit';
import { IShop } from 'shared';
import {} from './Shop.actions';

export interface ShopState {
	entries: Record<number, IShop>;
}

const initialState: ShopState = {
	entries: {
		1: {
			id: 1,
			title: 'ShopItem1',
			content: 'Lorem ipsum',
		},
		2: {
			id: 2,
			title: 'ShopItem2',
			content: 'Lorem ipsum',
		},
		3: {
			id: 3,
			title: 'ShopItem3',
			content: 'Lorem ipsum',
		},
		4: {
			id: 4,
			title: 'ShopItem4',
			content: 'Lorem ipsum',
		},
	},
};

const ShopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
});

export const { actions, reducer } = ShopSlice;
