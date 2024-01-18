import { formatJSONResponse } from '$utils/format-json-response';

import type { LandingPageCourseCheckStatus } from '@repo/types-bridge';
import { ContentSyncStatus } from '@repo/types-bridge';

import { pathParamsSchema } from './schema';

import { initLambda } from '$libs/lambda';
import type { PrivateHandler } from '$libs/lambda/types';
import { SyncDataSchema } from '$libs/dynamodb/sync-content-data-table';

const handler: PrivateHandler<void, LandingPageCourseCheckStatus.Request, void> = async (event) => {
	const { id: contentId } = event.pathParameters;
	const { user_id: userId, username } = event.authContext;

	const userSynced = await checkQueryContentSyncStatus(userId, contentId);

	if (userSynced) {
		return formatJSONResponse<LandingPageCourseCheckStatus.Response>({
			status: ContentSyncStatus.SYNCED_BLOCKED,
			'user-id': userSynced.userId,
			username: userSynced.username
		});
	}

	await createContentSyncStatus(userId, username, contentId);

	return formatJSONResponse<LandingPageCourseCheckStatus.Response>({
		status: ContentSyncStatus.NOT_SYNCED
	});
};

const checkQueryContentSyncStatus = async (userId: string, contentId: string) => {
	const res = await SyncDataSchema.get({ userId, contentId });

	if (res.Item) {
		return {
			userId: res.Item.userId,
			username: res.Item.username
		};
	}
	return undefined;
};

const createContentSyncStatus = async (userId: string, username: string, contentId: string) => {
	await SyncDataSchema.put({ userId, contentId, username, status: ContentSyncStatus.OPEN });
};

export const main = initLambda(handler, {
	validatorSchema: {
		pathParamsSchema
	},
	isPrivateRouter: true
});
