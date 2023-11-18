import { FC } from 'react';
import { Title } from 'shared';
import { LoginEntities } from 'entities';
import cl from './style.module.scss';

export const Window: FC = () => {
	const { Form } = LoginEntities;

	return (
		<div className={cl.Container}>
			<div className={cl.Window}>
				<Title className={cl.Title}>Autorización</Title>
				<Form loginInput={<></>} passwordInput={<></>} nextButton={<></>} />
			</div>
		</div>
	);
};
