import { FC } from 'react';
import { MainEntities } from 'entities';
import { JoinCardFeatures } from 'features';

export const JoinCard: FC = () => {
	const { Card } = MainEntities;
	const { JoinButton } = JoinCardFeatures;

	return <Card joinButton={<JoinButton />} />;
};
