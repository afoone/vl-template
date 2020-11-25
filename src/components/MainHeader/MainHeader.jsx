import React, { useState } from 'react'
import { Logout } from '../Logout/Logout';
import { MainLogo } from '../MainLogo/MainLogo';
import { ModulesMainHeader } from '../ModulesMainHeader/ModulesMainHeader';
import Language from '../Language/Language'
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
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
                    <Box>
                        Usuario: {user.name}
                    </Box>
                    <Box ml='auto'>
                        <Button onClick={() => dispatch(logout())}>
                            <Logout />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainHeader
