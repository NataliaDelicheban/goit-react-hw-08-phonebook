import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactElement.module.css';

import Button from "@mui/material/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContactElement = ({ name, number, onClick }) => {
    return (
        <li className={css.contactElement}>
            <p className={css.contactText}>
                {name}: {number}
            </p>
            <Button variant='contained' startIcon={<DeleteForeverIcon />} className={css.button} type='button' onClick={onClick}>
                Delete
            </Button>
        </li>
    );
};

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
