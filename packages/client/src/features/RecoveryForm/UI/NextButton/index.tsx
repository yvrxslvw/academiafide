import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from 'shared';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	email: string;
}

export const NextButton: FC<NextButtonProps> = ({ email }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Recovery logic', email);
	};

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
