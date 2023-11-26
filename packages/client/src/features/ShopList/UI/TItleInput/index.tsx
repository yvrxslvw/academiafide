import { FC, PropsWithChildren } from 'react';
import { Input } from 'shared';

interface TitleInputProps extends PropsWithChildren {}

export const TitleInput: FC<TitleInputProps> = () => {
	return <Input label='El nombre del producto' />;
};
