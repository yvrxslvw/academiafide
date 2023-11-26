import { FC, PropsWithChildren } from 'react';
import { Input } from 'shared';

interface PriceInputProps extends PropsWithChildren {}

export const PriceInput: FC<PriceInputProps> = () => {
	return <Input label='Precio del nuevo producto' />;
};
