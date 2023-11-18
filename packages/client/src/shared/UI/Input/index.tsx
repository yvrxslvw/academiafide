import { FC, InputHTMLAttributes, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';
import cl from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Input: FC<InputProps> = ({ label, type, className, style, ...props }) => {
	const [isShown, setIsShown] = useState(false);

	const inputType = type === 'password' ? (isShown ? 'text' : 'password') : type;
	const inputStyle = { ...style, width: type === 'password' ? '94%' : '100%' };

	const onClickHandler = () => {
		setIsShown(prev => !prev);
	};

	return (
		<div className={cl.InputBlock}>
			<p className={cl.Label}>{label}</p>
			<input type={inputType} className={cn(cl.Input, className)} style={inputStyle} {...props} />
			{type === 'password' && (
				<button type='button' onClick={onClickHandler} className={cl.Button}>
					{isShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
				</button>
			)}
		</div>
	);
};
