import { FC, PropsWithChildren } from 'react';
import { Button } from 'shared';

interface NextButtonProps extends PropsWithChildren {}

export const NextButton: FC<NextButtonProps> = () => {
	return <Button>Siguiente</Button>;
};
