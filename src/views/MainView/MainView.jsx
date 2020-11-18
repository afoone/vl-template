import { Switch } from '@material-ui/core';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader/MainHeader';
import PatientsModule from '../PatientsModule/PatientsModule';
import './MainView.css';


export const MainView = () => {
    return (
        <div className='main-view'>
            <MainHeader></MainHeader>
            <PatientsModule></PatientsModule>
        </div>
    )
}
