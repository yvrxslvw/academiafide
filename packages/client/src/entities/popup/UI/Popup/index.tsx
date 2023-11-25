import { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import cl from './style.module.scss';

interface PopupProps {
	content: string;
	closeButton: ReactNode;
}

export const Popup: FC<PopupProps> = ({ content, closeButton }) => {
	return (
		<div className={cl.Popup}>
			<section className={cl.Icon}>
				<FontAwesomeIcon icon={faInfo} />
			</section>
			<section className={cl.Content}>{content}</section>
			<section className={cl.CloseButtonSection}>{closeButton}</section>
		</div>
	);
};
