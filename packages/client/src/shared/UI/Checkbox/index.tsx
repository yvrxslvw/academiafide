import { FC, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: ReactNode;
}

export const Checkbox: FC<CheckboxProps> = ({ label, className, ...props }) => {
	return (
		<label className={cn(cl.CheckboxBlock, className)}>
			<label className={cl.Label} htmlFor='checkbox'>
				{label}
			</label>
			<input className={cl.Input} id='checkbox' type='checkbox' {...props} />
			<span className={cl.CheckMark}></span>
		</label>
	);
};
