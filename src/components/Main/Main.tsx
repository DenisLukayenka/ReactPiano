import { useAudioContext } from "components/AudioContextProvider/useAudioContext";
import { KeyboardWithInstrument } from "components/Keyboard/WithInstrument";
import { NoAudioMessage } from "components/NoAudioMessage/NoAudioMessage";
import React, { FunctionComponent } from "react";

export const Main: FunctionComponent = () => {
    const AudioContext = useAudioContext();

    return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
}
