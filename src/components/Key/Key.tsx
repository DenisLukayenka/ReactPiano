import clsx from 'clsx';
import { NoteType } from 'domain/note';
import React, { FunctionComponent, ReactEventHandler } from 'react';

interface KeyProps { 
    type: NoteType;
    label: string;
    disabled?: boolean;

    onUp: ReactEventHandler<HTMLButtonElement>;
    onDown: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FunctionComponent<KeyProps> = (props) => {
    const { type, label, ...rest } = props;

    return (
        <button
            className={clsx(`key key--${type}`)}
            type="button"
            {...rest}
            onMouseDown={props.onDown}
            onMouseUp={props.onUp}
        ></button>
    );
}

