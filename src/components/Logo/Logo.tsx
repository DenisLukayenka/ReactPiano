import React, { FunctionComponent } from 'react';

export const Logo: FunctionComponent = () => {
    return (
        <h1 className="logo">
            <span role="img" aria-label="metal hand emoji">
                [Metal]
            </span>
            <span role="img" aria-label="musical keyboard emoji">
                [Keyboards]
            </span>
            <span role="img" aria-label="musical notes emoji">
                [Notes]
            </span>
        </h1>
    );
}
