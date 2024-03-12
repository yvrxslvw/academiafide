export interface INewProduct {
	title: string;
	titleError: boolean;
	description: string;
	descriptionError: boolean;
	price: string;
	priceError: boolean;
	link: string;
	linkError: boolean;
	image: File | null;
}
