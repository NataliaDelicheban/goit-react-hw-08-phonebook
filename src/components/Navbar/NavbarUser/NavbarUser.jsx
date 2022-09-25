import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";
import css from "../NavbarUser/navbar-user.module.css";

import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

const NavbarUser = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());

    return (
        <div>
            <span className={css.span}>{email}</span>
            <Button onClick={onLogout} variant='contained' startIcon={<LogoutIcon />} className={css.button}>
                Logout</Button>
        </div>
    );
};

export default NavbarUser;