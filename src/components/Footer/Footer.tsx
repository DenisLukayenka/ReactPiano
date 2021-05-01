import React, { FunctionComponent } from 'react';
import './Footer.css';

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footerContainer">
            <a href="https://fullstack.io">Fullstack</a>
            <br />
            <span>{currentYear}</span>
        </footer>
    );
}