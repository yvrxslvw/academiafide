import { FC } from 'react';
import i18next from 'i18next';

export const EnglishButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('en');
		document.cookie = 'language=en; SameSite=Lax';
	};

	return <button onClick={onClickHandler}>English</button>;
};
