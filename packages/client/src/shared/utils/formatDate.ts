export const formatDate = (dateFromBackend: string): string => {
	const fullDate = new Date(dateFromBackend);
	let hours: number | string = fullDate.getHours();
	let minutes: number | string = fullDate.getMinutes();
	let date: number | string = fullDate.getDate();
	let month: number | string = fullDate.getMonth() + 1;
	const fullYear: number | string = fullDate.getFullYear();

	if (hours < 10) hours = `0${hours}`;
	if (minutes < 10) minutes = `0${minutes}`;
	if (date < 10) date = `0${date}`;
	if (month < 10) month = `0${month}`;

	return `${hours}:${minutes} ${date}.${month}.${fullYear}`;
};
