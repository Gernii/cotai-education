import { Entity } from 'dynamodb-toolbox';
import { ContentSyncStatus } from '@repo/types-bridge';

import { SyncContentDataTableDDB } from './init';

const generateGSI1PK = (data: Record<'userId', string>) => `${data.userId}`;
const generateGSI1SK = (data: Record<'contentId', string>) => `${data.contentId}`;

export const SyncDataSchema = new Entity({
	// Specify entity name
	name: 'SyncDataSchema',

	// Define attributes
	attributes: {
		contentId: { type: 'string', partitionKey: true, prefix: 'C#' },
		userId: { type: 'string', prefix: 'U#', sortKey: true },
		GSI1PK: {
			hidden: true,
			type: 'string',
			default: generateGSI1PK,
			prefix: 'U#'
		},
		GSI1SK: {
			hidden: true,
			type: 'string',
			default: generateGSI1SK,
			prefix: 'C#'
		},
		status: {
			type: 'number',
			default: ContentSyncStatus.OPEN,
			map: 's',
			required: true
		}

		// ttl: {
		// 	type: 'number',
		// 	map: 'ttl',
		// 	default: () => Date.now() / 1000 + 3600
		// }
	},

	// Assign it to our table
	table: SyncContentDataTableDDB
} as const);
