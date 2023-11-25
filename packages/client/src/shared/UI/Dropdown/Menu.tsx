import { FC, PropsWithChildren, HTMLAttributes, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import cl from './style.module.scss';
import './transition.scss';

interface MenuProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	initialButton: ReactNode;
	shown: boolean;
}

export const Menu: FC<MenuProps> = ({ initialButton, shown, children, className, ...props }) => {
	const itemsRef = useRef<HTMLDivElement>(null);

	return (
		<div className={cn(cl.Menu, className)} {...props}>
			<section className={cl.InitialButton}>{initialButton}</section>
			<CSSTransition in={shown} nodeRef={itemsRef} timeout={300} classNames='DropdownItems' unmountOnExit>
				<section className={cl.Items} ref={itemsRef}>
					{children}
				</section>
			</CSSTransition>
		</div>
	);
};
