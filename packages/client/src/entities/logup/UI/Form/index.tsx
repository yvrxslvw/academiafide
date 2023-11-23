import { FC, FormEvent, ReactNode } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface FormProps {
	loginInput: ReactNode;
	passwordInput: ReactNode;
	passwordConfirmInput: ReactNode;
	termsCheckbox: ReactNode;
	nextButton: ReactNode;
}

export const Form: FC<FormProps> = ({ loginInput, passwordInput, passwordConfirmInput, termsCheckbox, nextButton }) => {
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmitHandler} className={cl.Form}>
			<section className={cl.Item}>{loginInput}</section>
			<section className={cl.Item}>{passwordInput}</section>
			<section className={cl.Item}>{passwordConfirmInput}</section>
			<section className={cl.Item}>{termsCheckbox}</section>
			<section className={cn(cl.Item, cl.ButtonBody)}>{nextButton}</section>
		</form>
	);
};
