import type { ContentSyncStatus } from "../../enums";

export enum LandingPageCourseAccessRequestType {
  REQUEST_ACCESS,
  REQUEST_CHECKOUT,
}
export namespace LandingPageCourseAccess {
  export interface RequestPathParams {
    id: string;
  }

  export interface RequestBody {
    type: LandingPageCourseAccessRequestType;
  }
  export interface Response {
    status: ContentSyncStatus;
  }
}
