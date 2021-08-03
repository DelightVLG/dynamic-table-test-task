import React from 'react';
import { MenuLink } from '../../ui/MenuLink/MenuLink';
import './NavBar.sass';

export const NavBar: React.FC = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__buttons-wrapper">
                <MenuLink title={'Dynamic Table'} path={'/table'}/>
                <MenuLink title={'Video'} path={'/video'}/>
            </div>
        </nav>
    )
}
