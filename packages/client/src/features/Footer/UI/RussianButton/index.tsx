import { FC } from 'react';
import i18next from 'i18next';

export const RussianButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('ru');
		document.cookie = 'language=ru; SameSite=Lax; expires=' + new Date(9999, 0, 1);
	};

	return <button onClick={onClickHandler}>Русский</button>;
};
