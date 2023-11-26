export interface INewProduct {
	title: string;
	titleError: boolean;
	description: string;
	descriptionError: boolean;
	price: number;
	priceError: boolean;
	image: File | null;
}
