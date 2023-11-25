import { FC } from 'react';
import { modelEntries, useAppSelector } from 'shared';
import { PopupEntities } from 'entities';
import cl from './style.module.scss';
import { PopupFeatures } from 'features';

export const PopupBody: FC = () => {
	const { entries } = useAppSelector(state => state.popup);
	const { Popup } = PopupEntities;
	const { CloseButton } = PopupFeatures;

	return (
		<section className={cl.PopupBody}>
			{modelEntries(entries).map(({ id, content }) => (
				<Popup content={content} closeButton={<CloseButton id={id} />} key={id} />
			))}
		</section>
	);
};
