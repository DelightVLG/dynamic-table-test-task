import React from 'react';
import { NavLink } from 'react-router-dom'
import './MenuButton.sass';

interface MenuButtonProps {
    title: string,
    path: string
}

export const MenuButton: React.FC<MenuButtonProps> = ({title, path}) => {

    return (
        <NavLink to={path}>
            {title}
        </NavLink>
    )
}
