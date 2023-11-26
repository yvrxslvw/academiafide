import { FC, PropsWithChildren } from 'react';
import { Textarea } from 'shared';

interface DescriptionTextareaProps extends PropsWithChildren {}

export const DescriptionTextarea: FC<DescriptionTextareaProps> = () => {
	return <Textarea label='Descripción del nuevo producto' max={255} />;
};
