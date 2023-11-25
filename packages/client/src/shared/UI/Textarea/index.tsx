import { ChangeEvent, FC, TextareaHTMLAttributes, useState } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	max?: number;
}

export const Textarea: FC<TextareaProps> = ({ label, max, className, onChange, value, ...props }) => {
	const [length, setLength] = useState(value?.toString().length);
	const [isMax, setIsMax] = useState(false);

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const valueLength = event.target.value.length;
		setIsMax(false);
		if (max && valueLength >= max + 1) return setIsMax(true);
		setLength(valueLength);
		if (onChange) onChange(event);
	};

	return (
		<div className={cn(cl.TextareaBlock, className)}>
			<label>{label}:</label>
			<textarea className={cl.Textarea} spellCheck={false} onChange={onChangeHandler} value={value} {...props} />
			{max && (
				<p className={cn(cl.Length, { [cl.Max]: isMax })}>
					{length}/{max}
				</p>
			)}
		</div>
	);
};
