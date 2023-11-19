import { FC, FormEvent, PropsWithChildren } from 'react';
import cn from 'classnames';
import { Button, Input } from 'shared';
import cl from './style.module.scss';

interface FormProps extends PropsWithChildren {}

export const Form: FC<FormProps> = () => {
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmitHandler} className={cl.Form}>
			<section className={cl.Item}>
				<Input label='Login' />
			</section>
			<section className={cl.Item}>
				<Input label='Email' />
			</section>
			<section className={cl.Item}>
				<Input label='Password' />
			</section>
			<section className={cl.Item}>
				<Input label='Confirm password' />
			</section>
			<section className={cl.Item}>
				
			</section>
			<section className={cn(cl.Item, cl.ButtonBody)}>
				<Button type='submit'>Siguente</Button>
			</section>
		</form>
	);
};
