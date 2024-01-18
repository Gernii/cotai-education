import { formatJSONResponse } from '$utils/format-json-response';

import type { LandingPageCourseAccess } from '@repo/types-bridge';
import { ContentSyncStatus, LandingPageCourseAccessRequestType } from '@repo/types-bridge';

import { pathParamsSchema, bodySchema } from './schema';

import { initLambda } from '$libs/lambda';
import type { PrivateHandler } from '$libs/lambda/types';
import { SyncDataSchema } from '$libs/dynamodb/sync-content-data-table';

const handler: PrivateHandler<
	LandingPageCourseAccess.RequestBody,
	LandingPageCourseAccess.RequestPathParams,
	void
> = async (event) => {
	const { id: contentId } = event.pathParameters;
	const { type } = event.body;
	const { user_id } = event.authContext;

	if (type === LandingPageCourseAccessRequestType.REQUEST_CHECKOUT) {
		await removeContentSyncStatus(user_id, contentId);
		return formatJSONResponse<LandingPageCourseAccess.Response>({
			status: ContentSyncStatus.NOT_SYNCED
		});
	}

	const contentStatus = await checkQueryContentSyncStatus(user_id, contentId);

	switch (contentStatus) {
		case ContentSyncStatus.SYNCED:
			return formatJSONResponse<LandingPageCourseAccess.Response>({
				status: ContentSyncStatus.SYNCED_BLOCKED
			});
		case undefined:
		case ContentSyncStatus.PENDING:
			const isOtherUserSync = await checkOtherUsersContentSyncStatus(user_id, contentId);
			if (isOtherUserSync) {
				return formatJSONResponse<LandingPageCourseAccess.Response>({
					status: ContentSyncStatus.PENDING
				});
			}
		// falls through
		default:
			await createContentSyncStatus(user_id, contentId);
			return formatJSONResponse<LandingPageCourseAccess.Response>({
				status: ContentSyncStatus.SYNCED
			});
	}
};

const createContentSyncStatus = async (userId: string, contentId: string) => {
	await SyncDataSchema.update({ userId, contentId, status: ContentSyncStatus.SYNCED });
};

const removeContentSyncStatus = async (userId: string, contentId: string) => {
	await SyncDataSchema.delete({ userId, contentId });
};

const checkQueryContentSyncStatus = async (userId: string, contentId: string) => {
	const res = await SyncDataSchema.get({ userId, contentId });

	if (!res.Item) {
		return undefined;
	}
	return res.Item.status as ContentSyncStatus;
};

const checkOtherUsersContentSyncStatus = async (userId: string, contentId: string) => {
	const res = await SyncDataSchema.query(`C#${contentId}`);
	const items = res.Items;

	if (!items || items.length === 0) {
		return false;
	}

	const itemsFiltered = items.filter((item) => item.userId !== userId);
	if (itemsFiltered.length === 0) {
		return false;
	}

	return true;
};

export const main = initLambda(handler, {
	validatorSchema: {
		pathParamsSchema,
		bodySchema
	},
	isPrivateRouter: true
});
