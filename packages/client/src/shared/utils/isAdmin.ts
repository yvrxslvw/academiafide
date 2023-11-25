import { IUser } from '../models/IUser';

export const isAdmin = (userInfo: IUser): boolean => {
	return userInfo.roles.some(role => role.tag === 'ADMIN');
};
