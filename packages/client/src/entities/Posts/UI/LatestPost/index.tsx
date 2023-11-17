import { FC, ReactNode } from 'react';
import cl from './style.module.scss';

interface LatestPostProps {
	content: ReactNode;
	showMoreButton: ReactNode;
}

export const LatestPost: FC<LatestPostProps> = ({ content, showMoreButton }) => {
	return (
		<section className={cl.LatestPost}>
			{content}
			<section className={cl.ShowMoreButton}>{showMoreButton}</section>
		</section>
	);
};
