import React, { useEffect, useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { connect, useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/actions/auth';
import { useRouter } from 'next/router';

const Login = props => {
    const dispatch = useDispatch();
    const router = useRouter()
    const error = useSelector(state => state.auth.error)
    const user = useSelector(state => state.auth.user)

    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formState;


    const handleInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value});
    }

    useEffect(()=>{
        if(user.name){
            router.push("/dashboard")
        }
    },[user])
    return (
        <div className="wrapper"><div className="login">
           
            <Paper
                elevation={0}
            >
                <Typography variant='h5' className='login__title'> Login </Typography>
                {error && <div>{error}</div>}
                <div className='form stack stack-s stack-v'>
                    <TextField
                        onChange={handleInputChange}
                        className='input stack__item'
                        required
                        label='Usuario'
                        type='text'
                        name='username'
                        variant='outlined'
                        value={formState.username}
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
                        onClick={() => dispatch(loginAsync(username))}
                        className='login__submit-button'
                        variant="contained"
                        color="primary">
                        Entrar
                </Button>
                </div>
            </Paper>
        </div>
        </div>
    )
}

const mapStateToProps = ({ isLoading }) => ({ isLoading })

export default connect(mapStateToProps, { loginAsync })(Login)