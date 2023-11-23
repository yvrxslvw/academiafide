import { API_URL } from '../constants/ApiUrl';

export const formatImageUrl = (imageEndpoint: string): string => {
	return `${API_URL}/${imageEndpoint}`;
};
