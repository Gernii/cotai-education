import { ProgramIds } from "./constants";
import { dataProgramPublicTraining } from "./public-training";
import type { ProgramProps } from "./types";

export const programsMap = new Map<ProgramIds, ProgramProps>([
    [ProgramIds.public_training, dataProgramPublicTraining],
]);
