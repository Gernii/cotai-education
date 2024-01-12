import { formatJSONResponse } from '$utils/format-json-response';

import type { AnyObject, Maybe, ObjectSchema, ValidationError } from 'yup';

export const extractFromRequest = <T extends Maybe<AnyObject>>(
	props: ExtractDataFromRequestProps<T>
) => {
	const { data, schema } = props;

	const validateRes = yupValidator(schema.noUnknown()).validateSync({ ...data });
	if (validateRes.error || validateRes.data === null || validateRes.data === undefined) {
		throw formatJSONResponse('Unprocessable Entity', { statusCode: 422 });
	}

	return validateRes.data as T;
};

export interface ExtractDataFromRequestProps<T extends Maybe<AnyObject>> {
	data?: T;
	schema: ObjectSchema<T>;
}

export interface YupValidatorResponse {
	data: Maybe<AnyObject>;
	error?: Record<string, string | undefined>;
}

export const yupValidator = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => {
	const respose: YupValidatorResponse = {
		data: null
	};
	const errorHandler = (error: unknown) => {
		const errorRes: Partial<Record<keyof T, string | undefined>> = {};
		const typedError = error as ValidationError;
		typedError.inner.forEach((e) => {
			errorRes[e.path as keyof T] = e.message;
		});
		return errorRes as Readonly<typeof errorRes>;
	};

	const validate = async <T extends Maybe<AnyObject>>(form: T) => {
		try {
			const res = await schema.validate(form, {
				abortEarly: false
			});

			respose.data = res === undefined ? null : res;
			return respose;
		} catch (error) {
			respose.error = errorHandler(error);
			return respose;
		}
	};

	const validateSync = <T extends Maybe<AnyObject>>(form: T) => {
		try {
			const res = schema.validateSync(form, {
				abortEarly: false
			});
			respose.data = res === undefined ? null : res;
			return respose;
		} catch (error) {
			respose.error = errorHandler(error);
			return respose;
		}
	};

	return { validate, validateSync };
};
