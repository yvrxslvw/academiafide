import { Dispatch, FC, SetStateAction } from 'react';
import { Button, INewProduct } from 'shared';

interface NextButtonProps {
	data: INewProduct;
	setData: Dispatch<SetStateAction<INewProduct>>;
}

export const NextButton: FC<NextButtonProps> = ({ data, setData }) => {
	const onClickHandler = async () => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	return <Button onClick={onClickHandler}>Siguiente</Button>;
};
