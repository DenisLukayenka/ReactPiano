import { ChangeEvent, FunctionComponent } from "react";
import { InstrumentName } from "soundfont-player";
import { useInstrument } from "state/Instrument/Context";
import { options } from "./options";

export const InstrumentSelector: FunctionComponent = () => {
    const { instrument, setInstrument } = useInstrument();
    const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => setInstrument(target.value as InstrumentName);

    return (
        <select
            className="instruments"
            onChange={updateValue}
            value={instrument}
        >
            {options.map(({ label, value }) => (
                <option key={value} value={label}>
                    {label}
                </option>
            ))}
        </select>
    );
}