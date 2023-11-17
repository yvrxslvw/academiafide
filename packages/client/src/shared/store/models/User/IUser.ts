import { IRole } from './IRole';

export interface IUser {
	id: number;
	login: string;
	roles: IRole[];
	avatarUrl: string;
}
