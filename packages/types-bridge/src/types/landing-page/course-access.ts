import type { ContentSyncStatus } from "../../enums";

export enum LandingPageCourseAccessRequestType {
    REQUEST_ACCESS = 0,
    REQUEST_CHECKOUT = 1,
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
