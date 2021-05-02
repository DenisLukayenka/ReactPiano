import { Key } from "components/Key/Key";
import { OctaveRange, selectKey } from "domain/keyboard";
import { MidiValue, notes } from "domain/note";
import React, { FunctionComponent } from "react";

export interface KeyboardProps {
    loading: boolean;
    play: (note: MidiValue) => Promise<void>;
    stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: FunctionComponent<KeyboardProps> = (props) => {
    return (
        <div className="keyboard">
            {notes.map(note => {
                const label = selectKey(note.octave as OctaveRange, note.index);
                return <Key
                    key={note.midi}
                    type={note.type}
                    label={label}
                    disabled={props.loading}
                    onDown={() => props.play(note.midi)}
                    onUp={() => props.stop(note.midi)}
                />
            })}
        </div>
    );
}
