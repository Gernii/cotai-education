export namespace LandingPageCourseForceAccess {
  export interface RequestPathParams {
    id: string;
  }

  export interface RequestBody {
    "force-stop-user-id": string;
  }

  export interface Response {
    success: boolean;
  }
}
