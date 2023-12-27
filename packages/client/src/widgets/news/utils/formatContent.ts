import { RegExp } from 'shared/RegExp';

export const formatContent = (content: string) => {
	content = content.replace(RegExp.linkWithText, '<a href="$2" target="_blank">$1</a>');
	content = content.replace(RegExp.link, '$1<a href="$3" target="_blank">$3</a>');

	return content.split('\n').join('<br />');
};
