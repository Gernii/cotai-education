import type { ContentSyncStatus } from "../../enums";

export namespace LandingPageCourseCheckStatus {
  export interface Request {
    id: string;
  }
  export type Response =
    | {
        status: ContentSyncStatus.SYNCED_BLOCKED;
        "user-id": string;
        username: string;
      }
    | {
        status: ContentSyncStatus.NOT_SYNCED;
      };
}
