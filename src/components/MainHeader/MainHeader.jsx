import React from 'react'
import { Logout } from '../logout/Logout';
import { MainLogo } from '../mainLogo/MainLogo';
import { ModulesMainHeader } from '../modulesMainHeader/ModulesMainHeader';
import Language from '../language/Language'
import { AppBar, Box, Button, Toolbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
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
                    {/* {!user.name && <Redirect to="/login" />} */}
                    <Language/>
                    <Box ml='auto' display="flex">
                            
                            <Logout >
                            {user.name}
                                </Logout>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainHeader
