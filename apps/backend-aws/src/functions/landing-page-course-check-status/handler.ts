import { formatJSONResponse } from '$utils/format-json-response';

import type { LandingPageCourseCheckStatus } from '@repo/types-bridge';
import { ContentSyncStatus } from '@repo/types-bridge';

import { pathParamsSchema } from './schema';

import { initLambda } from '$libs/lambda';
import type { PrivateHandler } from '$libs/lambda/types';
import { SyncDataSchema } from '$libs/dynamodb/sync-content-data-table';

const handler: PrivateHandler<void, LandingPageCourseCheckStatus.Request, void> = async (event) => {
	const { id: contentId } = event.pathParameters;
	const { user_id } = event.authContext;

	const isContentSynced = await checkQueryContentSyncStatus(user_id, contentId);

	if (isContentSynced) {
		return formatJSONResponse<LandingPageCourseCheckStatus.Response>({
			status: ContentSyncStatus.SYNCED_BLOCKED
		});
	}

	await createContentSyncStatus(user_id, contentId);

	return formatJSONResponse<LandingPageCourseCheckStatus.Response>({
		status: ContentSyncStatus.NOT_SYNCED
	});
};

const checkQueryContentSyncStatus = async (userId: string, contentId: string) => {
	const res = await SyncDataSchema.get({ userId, contentId });

	if (res.Item) {
		return true;
	}
	return false;
};

const createContentSyncStatus = async (userId: string, contentId: string) => {
	await SyncDataSchema.put({ userId, contentId, status: ContentSyncStatus.OPEN });
};

export const main = initLambda(handler, {
	validatorSchema: {
		pathParamsSchema
	},
	isPrivateRouter: true
});
