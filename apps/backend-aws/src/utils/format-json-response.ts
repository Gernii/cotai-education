interface FormatJSONResponseOptions {
	statusCode?: number;
}

export const formatJSONResponse = (
	response: Record<string, unknown>,
	options?: FormatJSONResponseOptions
) => {
	return {
		statusCode: options?.statusCode ?? 200,
		body: JSON.stringify(response)
	};
};
