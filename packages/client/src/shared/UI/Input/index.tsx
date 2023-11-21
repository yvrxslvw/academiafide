import { FC, InputHTMLAttributes, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';
import cl from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: boolean;
}

export const Input: FC<InputProps> = ({ label, error, type, className, style, ...props }) => {
	const [isShown, setIsShown] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const inputType = type === 'password' ? (isShown ? 'text' : 'password') : type;
	const inputStyle = { ...style, width: type === 'password' ? '94%' : '100%' };

	const onClickEyeHandler = () => {
		setIsShown(prev => !prev);
	};

	const onClickLabelHandler = () => {
		inputRef.current?.focus();
	};

	return (
		<div className={cn(cl.InputBlock, { [cl.Error]: error })}>
			<input
				type={inputType}
				className={cn(cl.Input, className)}
				placeholder=''
				style={inputStyle}
				ref={inputRef}
				{...props}
			/>
			<label className={cl.Label} onClick={onClickLabelHandler}>
				{label}
			</label>
			{type === 'password' && (
				<button type='button' onClick={onClickEyeHandler} className={cl.Button}>
					{isShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
				</button>
			)}
		</div>
	);
};
