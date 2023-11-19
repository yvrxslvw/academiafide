import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, className, ...props }) => {
	return (
		<label className={cn(cl.CheckboxBlock, className)}>
			<label className={cl.Label}>{label}</label>
			<input className={cl.Input} type='checkbox' {...props} />
			<span className={cl.CheckMark}></span>
		</label>
	);
};
