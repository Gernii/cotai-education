import type { LandingPageCourseAccess } from '@repo/types-bridge';
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

export const pathParamsSchema: ObjectSchema<LandingPageCourseAccess.Request> = object({
	id: string().required()
});
