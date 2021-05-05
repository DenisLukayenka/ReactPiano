import { InstrumentSelector } from "components/InstrumentSelector/InstrumentSelector"
import { KeyboardWithInstrument } from "components/Keyboard/WithInstrument"
import { FunctionComponent } from "react";
import { InstrumentContextProvider } from "state/Instrument/Provider"

export const Playground: FunctionComponent = () => {
    return (
        <InstrumentContextProvider>
            <div className="playground">
                <KeyboardWithInstrument />
                <InstrumentSelector />
            </div>
        </InstrumentContextProvider>
    );
}
