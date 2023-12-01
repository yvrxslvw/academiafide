import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { IShop } from 'shared/models';
import { DeleteModal } from 'entities/shop';
import { DeleteButton } from 'features/ShopList';

interface DeleteProductProps {
	product: IShop | undefined;
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const DeleteProduct: FC<DeleteProductProps> = ({ product, isModalShown, setIsModalShown, refetch }) => {
	const [productTitle, setProductTitle] = useState('');
	const [productId, setProductId] = useState(-1);

	useEffect(() => {
		if (product) {
			setProductTitle(product.title);
			setProductId(product.id);
		}
	}, [isModalShown]);

	return (
		<DeleteModal
			productTitle={productTitle}
			isModalShown={isModalShown}
			setIsModalShown={setIsModalShown}
			nextButton={<DeleteButton productId={productId} refetch={refetch} setIsModalShown={setIsModalShown} />}
		/>
	);
};
