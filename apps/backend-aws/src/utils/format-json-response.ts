interface FormatJSONResponseOptions {
	statusCode?: number;
}

export const formatJSONResponse = (
	response: Record<string, unknown> | string,
	options?: FormatJSONResponseOptions
) => {
	const body = typeof response === 'string' ? response : JSON.stringify(response);
	return {
		statusCode: options?.statusCode ?? 200,
		body
	};
};
