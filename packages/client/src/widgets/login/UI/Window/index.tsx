import { FC } from 'react';
import { Title } from 'shared';
import cl from './style.module.scss';

export const Window: FC = () => {
	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Autorización</Title>
			</div>
		</div>
	);
};
