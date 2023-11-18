import { FC } from 'react';
import { Button } from 'shared';

interface NextButtonProps {
	login: string;
	password: string;
}

export const NextButton: FC<NextButtonProps> = ({ login, password }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.info(`Check login data feature ${login} ${password}.`);
	};

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
