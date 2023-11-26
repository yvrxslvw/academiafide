import { Dispatch, FC, SetStateAction } from 'react';
import { ShopEntities } from 'entities';
import { ShopListFeatures } from 'features';

interface AddNewProductProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewProduct: FC<AddNewProductProps> = ({ isModalShown, setIsModalShown }) => {
	const { CreateProductModal } = ShopEntities;
	const { TitleInput, DescriptionTextarea, PriceInput } = ShopListFeatures;

	return (
		<CreateProductModal
			isModalShown={isModalShown}
			setIsModalShown={setIsModalShown}
			titleInput={<TitleInput />}
			descriptionTextarea={<DescriptionTextarea />}
			priceInput={<PriceInput />}
		/>
	);
};
