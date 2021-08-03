import React from 'react';
import { MenuButton } from '../../ui/MenuButton/MenuButton';
import './NavBar.sass';

export const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__buttons-wrapper">
                <MenuButton title={'Dynamic Table'} path={'/table'}/>
                <MenuButton title={'Video'} path={'/video'}/>
            </div>
        </nav>
    )
}
