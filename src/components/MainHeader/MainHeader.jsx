import React, { useState } from 'react'
import { Logout } from '../Logout/Logout';
import { MainLogo } from '../MainLogo/MainLogo';
import { ModulesMainHeader } from '../ModulesMainHeader/ModulesMainHeader';
import Language from '../Language/Language'
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';


export const MainHeader = ({changeView}) => {
    return (
        <div >
            <AppBar position="static">
                <Toolbar className='main-header__toolbar'>
                    <MainLogo />
                    <ModulesMainHeader changeView={changeView}/>
                    <Box ml='auto'>
                        <Logout />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
