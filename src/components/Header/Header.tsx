import React from 'react';
import { Logo } from '../Logo/Logo';
import './Header.sass';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
        </header>
    )
}
