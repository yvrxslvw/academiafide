export const formatContent = (content: string) => {
	const linkWithTextRegex =
		/\[(.*)\|(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_+.~#?&/=]*)\]/g;
	const linkRegex = /(^|[\n ])([\w]*?)((ht|f)tp(s)?:\/\/[\w]+[^ ,"\n\r\t<]*)/gis;

	content = content.replace(linkWithTextRegex, '<a href="$2" target="_blank">$1</a>');
	content = content.replace(linkRegex, '$1<a href="$3" target="_blank">$3</a>');

	return content.split('\n').join('<br />');
};
