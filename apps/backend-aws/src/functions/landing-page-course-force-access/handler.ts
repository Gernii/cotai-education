import { formatJSONResponse } from '$utils/format-json-response';

import type { LandingPageCourseForceAccess } from '@repo/types-bridge';
import { ContentSyncStatus } from '@repo/types-bridge';

import { pathParamsSchema, bodySchema } from './schema';

import { initLambda } from '$libs/lambda';
import type { PrivateHandler } from '$libs/lambda/types';
import { SyncDataSchema } from '$libs/dynamodb/sync-content-data-table';

const handler: PrivateHandler<
	LandingPageCourseForceAccess.RequestBody,
	LandingPageCourseForceAccess.RequestPathParams,
	void
> = async (event) => {
	const { id: contentId } = event.pathParameters;
	const { 'force-stop-user-id': forceStopUserId } = event.body;
	const { user_id: userId } = event.authContext;

	const isOtherUserSync = await checkOtherUserContentSyncStatusWithId(forceStopUserId, contentId);

	if (isOtherUserSync) {
		await forceOtherUserChangeContentSyncStatusWithId(forceStopUserId, contentId);
	}

	await createContentSyncStatus(userId, contentId);

	return formatJSONResponse<LandingPageCourseForceAccess.Response>({
		success: true
	});
};

const checkOtherUserContentSyncStatusWithId = async (userId: string, contentId: string) => {
	const res = await SyncDataSchema.get({ userId, contentId });
	if (!res.Item) {
		return false;
	}
	return true;
};

const forceOtherUserChangeContentSyncStatusWithId = async (userId: string, contentId: string) => {
	await SyncDataSchema.update({ userId, contentId, status: ContentSyncStatus.FORCE_UPDATING });
};

const createContentSyncStatus = async (userId: string, contentId: string) => {
	await SyncDataSchema.update({ userId, contentId, status: ContentSyncStatus.PENDING });
};

export const main = initLambda(handler, {
	validatorSchema: {
		pathParamsSchema,
		bodySchema
	},
	isPrivateRouter: true
});
