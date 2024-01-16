import type { ContentSyncStatus } from "../../enums";

export namespace LandingPageCourseAccess {
  export interface Request {
    id: string;
  }
  export interface Response {
    status: ContentSyncStatus;
  }
}
