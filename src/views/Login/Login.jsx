import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import {getUserById} from '../../api/usersApi';
import './Login.css'
import { connect } from 'react-redux';
import {login} from '../../redux/actions/auth'

const Login = props => {

    const [error, setError] = useState(false);
    const [formState, setFormState] = useState({
       username: '',
       password:'',
    });

    const {username, password} = formState;
    

    const handleInputChange = ({target}) => {
        setFormState({...formState, [target.name]:target.value});
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError("Fields are required");
            return;
          }
          props.login({ username, password });
    }

    return (
        <Paper
            className='login'
            elevation={0}
            >
            <Typography variant='h5' className='login__title'> Login </Typography>
            <form className='form stack stack-s stack-v'>
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
                    onSubmit={handleOnSubmit}
                    className='login__submit-button' 
                    variant="contained" 
                    color="primary">
                    Entrar
                </Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = ({ isLoading }) => ({ isLoading })

export default connect(mapStateToProps, { login })(Login)
