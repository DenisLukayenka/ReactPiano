import { InstrumentName } from "soundfont-player";
import instruments from 'soundfont-player/instruments.json';

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

export const options = normalizeList(instruments as InstrumentList);