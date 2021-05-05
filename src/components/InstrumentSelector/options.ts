import { InstrumentName } from "soundfont-player";

interface Option {
    value: InstrumentName;
    label: string;
}

type OptionsList = Option[];
type InstrumentList = InstrumentName[];

function normalizeList(list: InstrumentList): OptionsList {
    return list.map(i => ({
        value: i,
        label: i.replace(/_/gi, " "),
    }));
}

declare const instruments: InstrumentName;
const instrumentsNames = Object.keys(instruments);

export const options = normalizeList(instrumentsNames as InstrumentList);