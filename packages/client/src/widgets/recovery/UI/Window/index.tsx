import { FC } from 'react';
import { Title } from 'shared';
import { RecoveryEntities } from 'entities';
// import { RecoveryFormFeatures } from 'features';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { Form } = RecoveryEntities;
	// const {} = RecoveryFormFeatures;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Recuperación de acceso</Title>
				<Form />
			</div>
		</div>
	);
};
