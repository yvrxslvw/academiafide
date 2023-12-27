import { FC } from 'react';
import i18next from 'i18next';

export const RussianButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('ru');
		document.cookie = 'language=ru; SameSite=Lax';
	};

	return <button onClick={onClickHandler}>Русский</button>;
};
