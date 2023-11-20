import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { ShopState } from './Shop.slice';
import { IShop } from 'shared';

type State = CombinedState<ShopState>;

export const shopApiFulfilled = (state: State, action: PayloadAction<IShop[]>) => {
	const entries = action.payload.reduce((record, item: IShop) => {
		record[item.id] = item;
		return record;
	}, {} as Record<number, IShop>);

	state.entries = entries;
};
