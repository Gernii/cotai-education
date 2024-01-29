import type { LandingPageCourseCheckStatus } from '@repo/types-bridge';
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

export const pathParamsSchema: ObjectSchema<LandingPageCourseCheckStatus.Request> = object({
	id: string().required()
});