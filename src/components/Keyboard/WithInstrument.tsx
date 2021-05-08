import React, { FunctionComponent } from 'react';
import { useAudioContext } from 'components/AudioContextProvider/useAudioContext';
import { Keyboard } from './Keyboard';
import { useInstrument } from 'state/Instrument/Context';
import { withInstrument } from 'adapters/Soundfont/SoundfontProvider';

const WrappedKeyboard = withInstrument(Keyboard);

export const KeyboardWithInstrument: FunctionComponent = () => {
    const context = useAudioContext()!;
    const { instrument } = useInstrument();

    return (
        <WrappedKeyboard
            AudioContext={context}
            instrument={instrument}
        />
    )
}
