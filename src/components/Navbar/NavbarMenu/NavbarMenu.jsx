import {NavLink } from 'react-router-dom';
import items from "./items";
import css from ".././NavbarMenu/navbar-menu.module.css";

const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
}
const NavbarMenu = () => {
    const elements = items.map(({ id, text, to }) => (
        <li key={id}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));
    
    return <ul className={css.menu}>{elements}</ul>
}

export default NavbarMenu;