import { IRole } from './IRole';

export interface IUser {
	id: number;
	login: string;
	image: string | null;
	email: string | null;
	email_confirmed: boolean;
	email_news: boolean;
	password: string;
	recovery_password: string | null;
	createdAt: string;
	roles: IRole[];
}
