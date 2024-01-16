import type { ContentSyncStatus } from "../../enums";

export namespace LandingPageCourseCheckStatus {
  export interface Request {
    id: string;
  }
  export interface Response {
    status: ContentSyncStatus;
  }
}
