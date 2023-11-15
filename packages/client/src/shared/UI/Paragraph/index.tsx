import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

type ParagraphColor = 'primary' | 'black' | 'white';

interface ParagraphProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {
	small?: boolean;
	color?: ParagraphColor;
}

export const Paragraph: FC<ParagraphProps> = ({ small, color, children, className, ...props }) => {
	return (
		<p className={cn(cl.Paragraph, className, { [cl.Small]: small }, cl[color ?? 'black'])} {...props}>
			{children}
		</p>
	);
};
