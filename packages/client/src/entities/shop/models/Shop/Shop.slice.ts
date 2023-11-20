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
			content:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloribus aspernatur, nesciunt necessitatibus harum incidunt quidem ea corrupti eveniet, eaque qui ipsa numquam ad aliquam vitae? Corporis non tempore voluptatum.',
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
		5: {
			id: 5,
			title: 'ShopItem5',
			content: 'Lorem ipsum',
		},
		6: {
			id: 6,
			title: 'ShopItem6',
			content:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloribus aspernatur, nesciunt necessitatibus harum incidunt quidem ea corrupti eveniet, eaque qui ipsa numquam ad aliquam vitae? Corporis non tempore voluptatum.',
		},
	},
};

const ShopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
});

export const { actions, reducer } = ShopSlice;
