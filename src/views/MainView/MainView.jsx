import { Switch } from '@material-ui/core';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import {MainHeader} from '../../components/MainHeader/MainHeader';
import './MainView.css';
import { PatientsModule } from '../PatientsModule/PatientsModule'

export const MainView = () => {
    return (
        <div className='main-view'>
            <MainHeader></MainHeader>
            <Router>
                <Switch>
                    <Route exact path='/pacientes' component={PatientsModule}></Route>
                </Switch>
            </Router>
        </div>
    )
}
