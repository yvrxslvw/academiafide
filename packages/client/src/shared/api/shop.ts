import { createApi } from '@reduxjs/toolkit/query/react';
import { IShop } from '../models';
import { baseQuery } from './baseQuery';

export const ShopApi = createApi({
	reducerPath: 'api/shop',
	tagTypes: ['shop'],
	baseQuery,
	endpoints: builder => ({
		getProducts: builder.query<IShop[], null>({
			query: () => ({
				url: '/products',
				method: 'GET',
			}),
		}),
		createProduct: builder.mutation<IShop, FormData>({
			query: body => ({
				url: '/products',
				method: 'PUT',
				body,
			}),
		}),
		editProduct: builder.mutation<IShop, { id: number; body: FormData }>({
			query: ({ id, body }) => ({
				url: `/products/${id}`,
				method: 'PATCH',
				body,
			}),
		}),
		deleteProduct: builder.mutation<{ message: string }, number>({
			query: id => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { useGetProductsQuery, useCreateProductMutation, useEditProductMutation, useDeleteProductMutation } =
	ShopApi;
