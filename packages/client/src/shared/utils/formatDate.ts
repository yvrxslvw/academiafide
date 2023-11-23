export const formatDate = (dateFromBackend: string): string => {
	const date = new Date(dateFromBackend);
	return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
