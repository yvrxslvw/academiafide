import { useEffect } from 'react';
import { useRefreshMutation } from 'shared/api';

export const useRefresh = () => {
	const [loginUser] = useRefreshMutation();

	useEffect(() => {
		loginUser();
	}, []);
};
