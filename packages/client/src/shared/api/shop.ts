import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, IShop } from 'shared';

export const ShopApi = createApi({
	reducerPath: 'api/shop',
	tagTypes: ['shop'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: builder => ({
		getProducts: builder.query<IShop[], null>({
			query: () => ({
				url: '/api/products',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetProductsQuery } = ShopApi;
