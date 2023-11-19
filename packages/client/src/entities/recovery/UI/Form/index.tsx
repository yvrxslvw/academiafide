import { FC, FormEvent, ReactNode } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface FormProps {
	emailInput: ReactNode;
	nextButton: ReactNode;
}

export const Form: FC<FormProps> = ({ emailInput, nextButton }) => {
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmitHandler} className={cl.Form}>
			<section className={cl.Item}>{emailInput}</section>
			<section className={cn(cl.Item, cl.ButtonBody)}>{nextButton}</section>
		</form>
	);
};
