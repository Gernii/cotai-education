import type { LandingPageCourseForceAccess } from '@repo/types-bridge';
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

export const pathParamsSchema: ObjectSchema<LandingPageCourseForceAccess.RequestPathParams> =
	object({
		id: string().required()
	});

export const bodySchema: ObjectSchema<LandingPageCourseForceAccess.RequestBody> = object({
	'force-stop-user-id': string().required()
});
