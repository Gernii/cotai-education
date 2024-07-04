import type { ContentSyncStatus } from "../../enums";

export namespace LandingPageCourseCheckout {
    export interface Request {
        id: string;
    }
    export interface Response {
        status: ContentSyncStatus;
    }
}
