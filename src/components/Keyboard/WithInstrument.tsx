import React, { FunctionComponent, useEffect } from 'react';
import { useSoundfont } from 'adapters/Soundfont/useSoundfont';
import { useAudioContext } from 'components/AudioContextProvider/useAudioContext';
import { Keyboard } from './Keyboard';
import { useInstrument } from 'state/Instrument/Context';

export const KeyboardWithInstrument: FunctionComponent = () => {
    const context = useAudioContext()!;
    const { instrument } = useInstrument();
    const { loading, current, play, stop, load } = useSoundfont({ AudioContext: context });

    useEffect(() => {
        if (!loading && instrument !== current) {
            load(instrument);
        }
    }, [load, loading, current, instrument]);

    return <Keyboard loading={loading} play={play} stop={stop} />
}