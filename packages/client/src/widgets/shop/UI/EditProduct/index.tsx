import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { INewProduct, IShop } from 'shared';
import { ShopEntities } from 'entities';
import { ShopListFeatures } from 'features';

interface EditProductProps {
	product: IShop | undefined;
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const EditProduct: FC<EditProductProps> = ({ product, isModalShown, setIsModalShown, refetch }) => {
	const { EditModal } = ShopEntities;
	const { TitleInput, PriceInput, DescriptionTextarea, ImageInput, EditButton } = ShopListFeatures;

	const [oldTitle, setOldTitle] = useState('');
	const [data, setData] = useState<INewProduct>({
		title: '',
		description: '',
		price: 0,
		image: {} as File,
		titleError: false,
		descriptionError: false,
		priceError: false,
	});
	const [productId, setProductId] = useState(-1);

	useEffect(() => {
		if (product) {
			setData({
				title: product.title,
				description: product.description,
				price: product.price,
				image: null,
				titleError: false,
				descriptionError: false,
				priceError: false,
			});
			setProductId(product.id);
			setOldTitle(product.title);
		}
	}, [isModalShown]);

	return (
		<EditModal
			isModalShown={isModalShown}
			setIsModalShown={setIsModalShown}
			titleInput={<TitleInput data={data} setData={setData} />}
			priceInput={<PriceInput data={data} setData={setData} />}
			descriptionTextarea={<DescriptionTextarea data={data} setData={setData} />}
			imageInput={<ImageInput data={data} setData={setData} />}
			nextButton={
				<EditButton
					data={data}
					setData={setData}
					setIsModalShown={setIsModalShown}
					refetch={refetch}
					productId={productId}
					oldTitle={oldTitle}
				/>
			}
		/>
	);
};
