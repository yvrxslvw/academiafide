import { FC, FormEvent, PropsWithChildren } from 'react';
import cn from 'classnames';
import { Button, Checkbox, Input } from 'shared';
import cl from './style.module.scss';

interface FormProps extends PropsWithChildren {}

export const Form: FC<FormProps> = () => {
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmitHandler} className={cl.Form}>
			<section className={cl.Item}>
				<Input label='Login' placeholder='Write your login' />
			</section>
			<section className={cl.Item}>
				<Input label='Email' type='email' placeholder='Write your email' />
			</section>
			<section className={cl.Item}>
				<Input label='Password' type='password' placeholder='Write your password' />
			</section>
			<section className={cl.Item}>
				<Input label='Confirm password' type='password' placeholder='Write your password again' />
			</section>
			<section className={cl.Item}>
				<Checkbox label='Agree 1' />
			</section>
			<section className={cl.Item}>
				<Checkbox label='Agree 2' />
			</section>
			<section className={cl.Item}>
				<Checkbox label='Agree 3' />
			</section>
			<section className={cn(cl.Item, cl.ButtonBody)}>
				<Button type='submit'>Siguente</Button>
			</section>
		</form>
	);
};
