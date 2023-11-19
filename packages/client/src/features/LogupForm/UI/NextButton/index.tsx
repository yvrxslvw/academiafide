import { FC } from 'react';
import { Button } from 'shared';

interface Data {
	login: string;
	email: string;
	password: string;
	passwordConfirm: string;
	terms: boolean;
}

interface NextButtonProps {
	data: Data;
}

export const NextButton: FC<NextButtonProps> = ({ data }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Register logic', data);
	};

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
