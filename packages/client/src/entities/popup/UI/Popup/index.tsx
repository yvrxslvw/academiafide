import { ClassAttributes, FC, HTMLAttributes, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import cl from './style.module.scss';

interface PopupProps extends ClassAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
	content: string;
	closeButton: ReactNode;
}

export const Popup: FC<PopupProps> = ({ content, closeButton, className, ...props }) => {
	return (
		<div className={cn(cl.Popup, className)} {...props}>
			<section className={cl.Icon}>
				<FontAwesomeIcon icon={faInfo} />
			</section>
			<section className={cl.Content}>{content}</section>
			<section className={cl.CloseButtonSection}>{closeButton}</section>
		</div>
	);
};
