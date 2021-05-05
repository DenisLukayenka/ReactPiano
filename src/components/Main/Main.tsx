import { useAudioContext } from "components/AudioContextProvider/useAudioContext";
import { NoAudioMessage } from "components/NoAudioMessage/NoAudioMessage";
import { Playground } from "components/Playground/Playground";
import React, { FunctionComponent } from "react";

export const Main: FunctionComponent = () => {
    const AudioContext = useAudioContext();

    return !!AudioContext ? <Playground /> : <NoAudioMessage />;
}
