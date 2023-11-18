import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, PublicRouterPaths } from 'shared';

export const JoinButton: FC = () => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate(PublicRouterPaths.LOGUP_PAGE);
	};

	return <Button onClick={onClickHandler}>Unirse</Button>;
};
