import { OctaveIndex, PitchIndex } from "./note";

export type Key = string;
export type Keys = Key[];
export type OctaveRange = Extract<OctaveIndex, 4 | 5>;

export const TOP_ROW: Keys = Array.from("2qw3er5t6y7u");
export const BOTTOM_ROW: Keys = Array.from("zsxdcvgbhnjm");

export function selectKey(octave: OctaveRange, index: PitchIndex): Key {
    const keysRow = octave < 5 ? TOP_ROW : BOTTOM_ROW;

    return keysRow[index];
}
