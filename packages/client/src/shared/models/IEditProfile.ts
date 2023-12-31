export interface IEditProfile {
	image: File | null;
	login: string;
	loginError: boolean;
	password: string;
	passwordError: boolean;
	email: string;
	emailError: boolean;
	email_news: boolean;
}
