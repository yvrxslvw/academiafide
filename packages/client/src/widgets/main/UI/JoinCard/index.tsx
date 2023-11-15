import { FC } from 'react';
import { JoinCardEntities } from 'entities';
import { JoinCardFeatures } from 'features';

export const JoinCard: FC = () => {
	const { Card } = JoinCardEntities;
	const { JoinButton } = JoinCardFeatures;

	return <Card joinButton={<JoinButton />} />;
};
