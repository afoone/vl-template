import { Box } from '@material-ui/core'
import React from 'react'
import {Logout} from '../Logout/Logout';
import {MainLogo} from '../MainLogo/MainLogo';
import {ModulesMainHeader} from '../ModulesMainHeader/ModulesMainHeader';

export const MainHeader = () => {
    return (
        <div className = 'main-header'>
            <MainLogo/>
            <ModulesMainHeader/>
            <Language/>
            <Logout/>
        </div>
    )
}
