import { FC, useEffect, useState } from 'react';
import axios from 'axios';

export const App: FC = () => {
	const [message, setMessage] = useState('');

	const fetchMessage = async () => {
		const response = await axios.get<{ message: string }>('http://localhost:3001/hello');
		setMessage(response.data.message);
	};

	useEffect(() => {
		fetchMessage();
	}, []);

	return <h3>{message}</h3>;
};
