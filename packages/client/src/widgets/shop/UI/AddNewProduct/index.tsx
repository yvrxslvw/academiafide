import { Dispatch, FC, SetStateAction, useState } from 'react';
import { INewProduct } from 'shared/models';
import { AddButton, DescriptionTextarea, ImageInput, PriceInput, TitleInput } from 'features/ShopList';
import { CreateProductModal } from 'entities/shop';

interface AddNewProductProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddNewProduct: FC<AddNewProductProps> = ({ isModalShown, setIsModalShown, refetch }) => {
	const [data, setData] = useState<INewProduct>({
		title: '',
		description: '',
		price: '',
		titleError: false,
		descriptionError: false,
		priceError: false,
		image: {} as File,
	});

	return (
		<CreateProductModal
			isModalShown={isModalShown}
			setIsModalShown={setIsModalShown}
			titleInput={<TitleInput data={data} setData={setData} />}
			descriptionTextarea={<DescriptionTextarea data={data} setData={setData} />}
			priceInput={<PriceInput data={data} setData={setData} />}
			imageInput={<ImageInput data={data} setData={setData} />}
			nextButton={<AddButton data={data} setData={setData} setIsModalShown={setIsModalShown} refetch={refetch} />}
		/>
	);
};
