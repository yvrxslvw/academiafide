import { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from 'shared/hooks';
import { modelEntries } from 'shared/utils';
import { CloseButton } from 'features/Popup';
import { Popup } from 'entities/popup';
import cl from './style.module.scss';
import './transition.scss';

export const PopupBody: FC = () => {
	const { entries } = useAppSelector(state => state.popup);

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
