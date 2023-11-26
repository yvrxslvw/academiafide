import { Dispatch, FC, SetStateAction, useState } from 'react';
import { INewProduct } from 'shared';
import { ShopEntities } from 'entities';
import { ShopListFeatures } from 'features';

interface AddNewProductProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddNewProduct: FC<AddNewProductProps> = ({ isModalShown, setIsModalShown, refetch }) => {
	const [data, setData] = useState<INewProduct>({
		title: '',
		description: '',
		price: 0,
		titleError: false,
		descriptionError: false,
		priceError: false,
		image: {} as File,
	});
	const { CreateProductModal } = ShopEntities;
	const { TitleInput, DescriptionTextarea, PriceInput, ImageInput, NextButton } = ShopListFeatures;

	return (
		<CreateProductModal
			isModalShown={isModalShown}
			setIsModalShown={setIsModalShown}
			titleInput={<TitleInput data={data} setData={setData} />}
			descriptionTextarea={<DescriptionTextarea data={data} setData={setData} />}
			priceInput={<PriceInput data={data} setData={setData} />}
			nextButton={<NextButton data={data} setData={setData} setIsModalShown={setIsModalShown} refetch={refetch} />}
			imageInput={<ImageInput data={data} setData={setData} />}
		/>
	);
};
