import type { dataCamDifference } from "./cam-difference";

export interface CamDifferenceProps {
    title: string;
    description: string;
    color: string;
}

export type CamDifferenceIds = keyof typeof dataCamDifference;
export type CamDifferenceArray = [CamDifferenceIds, CamDifferenceProps];
