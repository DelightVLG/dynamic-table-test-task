import React from 'react';
import { NavLink } from 'react-router-dom'
import './MenuLink.sass';

interface MenuLinkProps {
    title: string,
    path: string
}

export const MenuLink: React.FC<MenuLinkProps> = ({title, path}) => {

    return (
        <NavLink  className="menu-link" activeClassName="menu-link_is-active"  to={path}>
            {title}
        </NavLink>
    )
}
