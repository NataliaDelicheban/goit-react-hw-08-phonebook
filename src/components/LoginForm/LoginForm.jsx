import css from './login-form.module.css';

import { initialState } from './initialState';
import useForm from 'shared/hooks/useForm';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';


const LoginForm = ({onSubmit}) => {
    
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const {email, password } = state;
    
    return (
            <form action='' className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    User email:
                    <input
                        className={css.input}
                        type="email"
                        name="email"
                    value={email}
                    placeholder="Enter user email"
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
                    placeholder="Enter user password"
                        onChange={handleChange}
                    />
                    </label>
                <Button variant='contained' startIcon={<LoginIcon />} className={css.button} type='submit'>
                    Login
                </Button>
            </form>
        )
}

export default LoginForm;