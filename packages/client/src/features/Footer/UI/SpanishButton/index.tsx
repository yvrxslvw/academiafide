import { FC } from 'react';
import i18next from 'i18next';

export const SpanishButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('es');
		document.cookie = 'language=es; SameSite=Lax; expires=' + new Date(9999, 0, 1);
	};

	return <button onClick={onClickHandler}>Español</button>;
};
