import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface ParagraphProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {
	small?: boolean;
}

export const Paragraph: FC<ParagraphProps> = ({ small, children, className, ...props }) => {
	return (
		<p className={cn(cl.Paragraph, className, { [cl.Small]: small })} {...props}>
			{children}
		</p>
	);
};
