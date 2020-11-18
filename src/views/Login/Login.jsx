import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { getUserByUsername } from '../../api/usersApi';
import './Login.css'
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth'
import { Redirect } from 'react-router-dom'

const Login = props => {

    const [error, setError] = useState(false);
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const [redirect, setRedirect] = useState(false)

    const { username, password } = formState;


    const handleInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value });
    }

    const login = (e) => {
        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }

        getUserByUsername(username).then(
            res => {
                localStorage.setItem("user", JSON.stringify({ name: res.data[0].name }))
                setRedirect(true)
            }
        )
    }

    return (
        <div className="login">
            {redirect && <Redirect to="/" />}
            <Paper
                elevation={0}
            >
                <Typography variant='h5' className='login__title'> Login </Typography>
                <div className='form stack stack-s stack-v'>
                    <TextField
                        onChange={handleInputChange}
                        className='input stack__item'
                        required
                        label='Usuario'
                        type='text'
                        name='username'
                        variant='outlined'
                    />
                    <TextField
                        onChange={handleInputChange}
                        className='input stack__item'
                        required
                        label='Contraseña'
                        type='password'
                        name='password'
                        variant='outlined' />
                    <Button
                        onClick={login}
                        className='login__submit-button'
                        variant="contained"
                        color="primary">
                        Entrar
                </Button>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = ({ isLoading }) => ({ isLoading })

export default connect(mapStateToProps, { login })(Login)
