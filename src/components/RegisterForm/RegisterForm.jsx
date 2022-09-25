import css from './register-form.module.css';

import { initialState } from './initialState';
import useForm from 'shared/hooks/useForm';

import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


const RegisterForm = ({onSubmit}) => {
    
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { name, email, password } = state;
    
    return (
            <form action="" className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Username:
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                    value={name}
                    placeholder="Enter username"
                        onChange={handleChange}
                    />
                </label>
                <label className={css.label}>
                    User email:
                    <input
                        className={css.input}
                        type="email"
                        name="email"
                    value={email}
                    placeholder="Enter email"
                        onChange={handleChange}
                    />
            </label>
            <label className={css.label}>
                    User password:
                    <input
                        className={css.input}
                        type="password"
                        name="password"
                    value={password}
                    placeholder="Enter password"
                        onChange={handleChange}
                    />
                    </label>
                <Button variant='contained' startIcon={<PermIdentityIcon />} className={css.button} type='submit'>
                    Register
                </Button>
            </form>
        )
}


export default RegisterForm;