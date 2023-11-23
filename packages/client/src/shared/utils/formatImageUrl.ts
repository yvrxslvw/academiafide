import { API_URL } from '../constants/ApiUrl';

export const formatImageUrl = (imageEndpoint?: string): string | undefined => {
	if (imageEndpoint) return `${API_URL}/${imageEndpoint}`;
	else return undefined;
};
