import React from 'react'
import { Logout } from '../Logout/Logout';
import { MainLogo } from '../MainLogo/MainLogo';
import { ModulesMainHeader } from '../ModulesMainHeader/ModulesMainHeader';
import Language from '../Language/Language'

export const MainHeader = () => {
    return (
        <div className='main-header'>
            <MainLogo />
            <ModulesMainHeader />
            <Language />
            <Logout />
        </div>
    )
}
