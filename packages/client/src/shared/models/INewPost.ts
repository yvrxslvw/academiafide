export interface INewPost {
	title: string;
	titleError: boolean;
	content: string;
	contentError: boolean;
	image: File | null;
}
