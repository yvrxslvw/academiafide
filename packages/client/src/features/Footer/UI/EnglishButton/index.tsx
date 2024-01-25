import { FC } from 'react';
import i18next from 'i18next';

export const EnglishButton: FC = () => {
	const onClickHandler = () => {
		i18next.changeLanguage('en');
		document.cookie = 'language=en; SameSite=Lax; expires=' + new Date(9999, 0, 1);
	};

	return <button onClick={onClickHandler}>English</button>;
};
