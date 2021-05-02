import { useAudioContext } from "components/AudioContextProvider/useAudioContext";
import { Keyboard } from "components/Keyboard/Keyboard";
import { NoAudioMessage } from "components/NoAudioMessage/NoAudioMessage";
import React, { FunctionComponent } from "react";

export const Main: FunctionComponent = () => {
    const AudioContext = useAudioContext();

    return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
}
