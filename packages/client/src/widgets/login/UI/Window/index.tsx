import { FC } from 'react';
import { Title } from 'shared';
import cl from './style.module.scss';
import { LoginEntities } from 'entities';

export const Window: FC = () => {
	const { Form } = LoginEntities;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Autorización</Title>
				<Form />
			</div>
		</div>
	);
};
