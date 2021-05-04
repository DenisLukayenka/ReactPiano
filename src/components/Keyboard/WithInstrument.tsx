import React, { FunctionComponent, useRef } from 'react';
import { useSoundfont } from 'adapters/Soundfont/useSoundfont';
import { useAudioContext } from 'components/AudioContextProvider/useAudioContext';
import { Keyboard } from './Keyboard';

export const KeyboardWithInstrument: FunctionComponent = () => {
    const context = useAudioContext()!;
    const { loading, play, stop, load } = useSoundfont({ AudioContext: context });

    useRef(load);

    return <Keyboard loading={loading} play={play} stop={stop} />
}