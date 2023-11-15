import { FC } from 'react';
import { Button } from 'shared';

export const JoinButton: FC = () => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Join!!!');
	};

	return <Button onClick={onClickHandler}>Unirse</Button>;
};
