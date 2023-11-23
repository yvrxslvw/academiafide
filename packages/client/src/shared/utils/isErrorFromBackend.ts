interface NestJSException {
	message: string;
	error: string;
	statusCode: number;
}

export const isErrorFromBackend = (error: unknown): error is { data: NestJSException } => {
	return (
		typeof error === 'object' &&
		error != null &&
		'data' in error &&
		typeof (error as { data: NestJSException }).data.message === 'string' &&
		typeof (error as { data: NestJSException }).data.error === 'string' &&
		typeof (error as { data: NestJSException }).data.statusCode === 'number'
	);
};
