import type { Output, Resource } from './types';

export const DynamoDBSyncContentDataTableResourceName = 'SyncContentDataTable';
export const DynamoDBSyncContentDataTableOutputName = `${DynamoDBSyncContentDataTableResourceName}TableName`;
export const DynamoDBSyncContentDataTableExportName = `${DynamoDBSyncContentDataTableResourceName}-\${sls:stage}`;

export const DynamoDBSyncContentDataTableResource: Resource = {
	Type: 'AWS::DynamoDB::Table',
	Properties: {
		TableName: '${self:provider.stackName}-${env:SYNC_CONTENT_DATA_TABLE_NAME}',
		AttributeDefinitions: [
			{
				AttributeName: 'PK',
				AttributeType: 'S'
			},
			{
				AttributeName: 'SK',
				AttributeType: 'S'
			},
			{
				AttributeName: 'GSI1PK',
				AttributeType: 'S'
			},
			{
				AttributeName: 'GSI1SK',
				AttributeType: 'S'
			}
		],
		KeySchema: [
			{
				AttributeName: 'PK',
				KeyType: 'HASH'
			},
			{
				AttributeName: 'SK',
				KeyType: 'RANGE'
			}
		],
		BillingMode: 'PAY_PER_REQUEST',
		GlobalSecondaryIndexes: [
			{
				IndexName: 'GSI1',
				KeySchema: [
					{
						AttributeName: 'GSI1PK',
						KeyType: 'HASH'
					},
					{
						AttributeName: 'GSI1SK',
						KeyType: 'RANGE'
					}
				],
				Projection: {
					ProjectionType: 'ALL'
				}
			}
		]
	}
};

export const DynamoDBSyncContentDataTableOutput: Output = {
	Description: 'The name of the DynamoDB table for Sync Content Data',
	Value: {
		Ref: DynamoDBSyncContentDataTableResourceName
	},
	Export: {
		Name: DynamoDBSyncContentDataTableExportName
	}
};
