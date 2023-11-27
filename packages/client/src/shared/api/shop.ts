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
		createProduct: builder.mutation<IShop, FormData>({
			query: body => ({
				url: '/api/products',
				method: 'PUT',
				body,
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
				},
			}),
		}),
		editProduct: builder.mutation<IShop, { id: number; body: FormData }>({
			query: ({ id, body }) => ({
				url: `/api/products/${id}`,
				method: 'PATCH',
				body,
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
				},
			}),
		}),
		deleteProduct: builder.mutation<{ message: string }, number>({
			query: id => ({
				url: `/api/products/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
				},
			}),
		}),
	}),
});

export const { useGetProductsQuery, useCreateProductMutation, useEditProductMutation, useDeleteProductMutation } =
	ShopApi;
