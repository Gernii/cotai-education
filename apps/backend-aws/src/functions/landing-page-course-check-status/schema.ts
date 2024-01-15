import type { LandingPageCourseCheckStatus as NS } from '@repo/types-bridge';
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

export const pathParamsSchema: ObjectSchema<NS.Request> = object({
	id: string().required()
});
