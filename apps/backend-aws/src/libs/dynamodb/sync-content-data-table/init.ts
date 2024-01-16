import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { TranslateConfig } from '@aws-sdk/lib-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Table } from 'dynamodb-toolbox';

const SYNC_CONTENT_DATA_TABLE_NAME =
	process.env.SYNC_CONTENT_DATA_TABLE_NAME ?? 'cotai-education-dev-sync-content-data-table';

const DYNAMO_REGION = process.env.DYNAMO_REGION ?? undefined;
const DYNAMO_ENDPOINT =
	process.env.DYNAMO_ENDPOINT !== '' ? process.env.DYNAMO_ENDPOINT : undefined;

const translateConfig: TranslateConfig = {
	marshallOptions: {
		// Specify your client options as usual
		convertEmptyValues: false
	}
};
const TableName = `${SYNC_CONTENT_DATA_TABLE_NAME}`;

export const DynamoDocumentClient = DynamoDBDocumentClient.from(
	new DynamoDBClient({ region: DYNAMO_REGION, endpoint: DYNAMO_ENDPOINT }),
	translateConfig
);

// Instantiate a table
export const SyncContentDataTableDDB = new Table({
	// Specify table name (used by DynamoDB)
	name: TableName,

	// Define partition and sort keys
	partitionKey: 'PK',
	sortKey: 'SK',
	indexes: {
		GSI1: { partitionKey: 'GSI1PK', sortKey: 'GSI1SK' }
	},

	// Add the DocumentClient
	DocumentClient: DynamoDocumentClient
});
