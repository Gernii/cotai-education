import type { LandingPageCourseAccess } from '@repo/types-bridge';
import type { ObjectSchema } from 'yup';
import { number, object, string } from 'yup';

export const pathParamsSchema: ObjectSchema<LandingPageCourseAccess.RequestPathParams> = object({
	id: string().required()
});

export const bodySchema: ObjectSchema<LandingPageCourseAccess.RequestBody> = object({
	type: number().required()
});
