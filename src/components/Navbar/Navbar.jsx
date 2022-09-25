import { Link } from "react-router-dom";

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import useAuth from "shared/hooks/useAuth";

import css from "./navbar.module.css";
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';

const Navbar = () => {
    const isLogin = useAuth();

    return (
        <div className={css.wrapper}>
            <Link className={css.logo} to="/">
            <Button type="submit" variant='contained' size='large' color='inherit' startIcon={<ContactsIcon />}>
          Home
        </Button>
            </Link>
            {isLogin && <NavbarMenu />}
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
</div>
    )
}

export default Navbar;