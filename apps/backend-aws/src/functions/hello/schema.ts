import type { JSONSchemaType } from 'ajv';
export interface BodyData {
	name: string;
	age: number;
}

export const bodySchema: JSONSchemaType<BodyData> = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		age: { type: 'number' }
	},
	required: ['name']
};
