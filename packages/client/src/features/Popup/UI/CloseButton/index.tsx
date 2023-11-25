import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import cl from './style.module.scss';

interface CloseButtonProps {
	id: number;
}

export const CloseButton: FC<CloseButtonProps> = ({ id }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('close', id);
	};

	return (
		<button className={cl.CloseButton} onClick={onClickHandler}>
			<FontAwesomeIcon icon={faXmark} />
		</button>
	);
};
