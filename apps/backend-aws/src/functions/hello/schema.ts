import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

import type { HelloRequest } from './types';

export const helloBodySchema: ObjectSchema<HelloRequest> = object({
	hi: string().required()
});
