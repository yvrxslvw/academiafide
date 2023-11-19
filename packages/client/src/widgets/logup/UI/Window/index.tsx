import { FC } from 'react';
import { Title } from 'shared';
import cl from './style.module.scss';
import { LogupEntities } from 'entities';

export const Window: FC = () => {
	const { Form } = LogupEntities;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Registro</Title>
				<Form />
			</div>
		</div>
	);
};
