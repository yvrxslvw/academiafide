export interface INewProduct {
	title: string;
	titleError: boolean;
	description: string;
	descriptionError: boolean;
	price: string;
	priceError: boolean;
	image: File | null;
}
