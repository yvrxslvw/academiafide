import { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { modelEntries, useAppSelector } from 'shared';
import { PopupEntities } from 'entities';
import { PopupFeatures } from 'features';
import cl from './style.module.scss';
import './transition.scss';

export const PopupBody: FC = () => {
	const { entries } = useAppSelector(state => state.popup);
	const { Popup } = PopupEntities;
	const { CloseButton } = PopupFeatures;

	return (
		<section className={cl.PopupBody}>
			<TransitionGroup>
				{modelEntries(entries).map(({ id, content }) => (
					<CSSTransition timeout={300} classNames='popup' key={id}>
						<Popup content={content} closeButton={<CloseButton id={id} />} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</section>
	);
};
