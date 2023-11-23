import { createSlice } from '@reduxjs/toolkit';
import { IShop, ShopApi } from 'shared';
import { shopApiFulfilled } from './Shop.actions';

export interface ShopState {
	entries: Record<number, IShop>;
}

const initialState: ShopState = {
	entries: {},
};

const ShopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(ShopApi.endpoints.getProducts.matchFulfilled, shopApiFulfilled);
	},
});

export const { actions, reducer } = ShopSlice;
