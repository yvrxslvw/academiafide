import { FC } from 'react';
import i18next from 'i18next';

export const SpanishButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('es');
		document.cookie = 'language=es; SameSite=Lax';
	};

	return <button onClick={onClickHandler}>Español</button>;
};
