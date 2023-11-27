import { FC, PropsWithChildren, HTMLAttributes, useRef, Dispatch, SetStateAction } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import cl from './style.module.scss';
import './transition.scss';

interface ModalProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	title: string;
}

export const Modal: FC<ModalProps> = ({ shown, setShown, title, children, className, ...props }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const onClickHandler = () => {
		setShown(false);
	};

	return (
		<CSSTransition in={shown} nodeRef={modalRef} timeout={300} classNames='modal' unmountOnExit>
			<div className={cl.Modal} ref={modalRef} {...props}>
				<div className={cl.Blackout} onClick={onClickHandler} />
				<div className={cl.Window}>
					<button className={cl.CloseButton} onClick={onClickHandler}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
					<h2 className={cl.Title}>{title}</h2>
					<section className={cn(cl.Content, className)}>{children}</section>
				</div>
			</div>
		</CSSTransition>
	);
};
