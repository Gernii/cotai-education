import type { AnyObject, Maybe, ObjectSchema, ValidationError } from 'yup';

export interface YupValidatorResponse<T extends Maybe<AnyObject>> {
	data?: T;
	error?: Readonly<Partial<Record<keyof T, string>>>;
}

export const yupValidator = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => {
	const respose: YupValidatorResponse<T> = {
		data: undefined
	};
	const errorHandler = (error: unknown) => {
		const errorRes: Partial<Record<keyof T, string | undefined>> = {};
		const typedError = error as ValidationError;
		typedError.inner.forEach((e) => {
			errorRes[e.path as keyof T] = e.message;
		});

		return errorRes as Readonly<typeof errorRes>;
	};

	const validate = async <M extends Maybe<AnyObject>>(form: M) => {
		try {
			const res = await schema.validate(form, {
				abortEarly: false
			});

			respose.data = res as T;
			return respose;
		} catch (error) {
			respose.error = errorHandler(error);
			return respose;
		}
	};

	const validateSync = <M extends Maybe<AnyObject>>(form: M) => {
		try {
			const res = schema.validateSync(form, {
				abortEarly: false
			});
			respose.data = res as T;
			return respose;
		} catch (error) {
			respose.error = errorHandler(error);
			return respose;
		}
	};

	return { validate, validateSync };
};
