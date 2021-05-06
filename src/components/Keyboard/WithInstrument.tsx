import React, { FunctionComponent } from 'react';
import { useAudioContext } from 'components/AudioContextProvider/useAudioContext';
import { Keyboard } from './Keyboard';
import { useInstrument } from 'state/Instrument/Context';
import { SoundfontProvider } from 'adapters/Soundfont/SoundfontProvider';

export const KeyboardWithInstrument: FunctionComponent = () => {
    const context = useAudioContext()!;
    const { instrument } = useInstrument();

    return (
        <SoundfontProvider
            AudioContext={context}
            instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />
    )
}
