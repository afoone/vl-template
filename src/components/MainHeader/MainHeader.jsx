import React from 'react'
import { Logout } from '../Logout/Logout';
import { MainLogo } from '../MainLogo/MainLogo';
import { ModulesMainHeader } from '../ModulesMainHeader/ModulesMainHeader';
import Language from '../language/Language'
import { AppBar, Box, Button, Toolbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/actions/auth'


const MainHeader = ({ changeView }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    return (
        <div >
            <AppBar position="static">
                <Toolbar className='main-header__toolbar'>
                    <MainLogo />
                    <ModulesMainHeader changeView={changeView} />
                    {!user.name && <Redirect to="/login" />}
                    <Language/>
                    <Box ml='auto' display="flex">
                            
                            <Logout onClick={() => dispatch(logout())} >
                            {user.name}
                                </Logout>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainHeader
