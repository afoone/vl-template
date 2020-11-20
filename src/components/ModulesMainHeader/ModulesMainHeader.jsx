import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useEffect } from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import OpacityIcon from '@material-ui/icons/Opacity';
import {CONTROL_AGUAS_VIEW,PATIENTS_VIEW} from '../../views'

import './ModulesMainHeader.css'

export const ModulesMainHeader = props => {
    const [value, setValue] = React.useState(0);
    useEffect(() => {
         props.changeView(value === 0 ? PATIENTS_VIEW : CONTROL_AGUAS_VIEW)
    }, [value])

    return (
        <div className='modules-main-header'>
            <BottomNavigation 
                showlabels={'true'}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction label="Pacientes" icon={<PeopleAltIcon />} />
                <BottomNavigationAction label="Control aguas" icon={<OpacityIcon />} />
            </BottomNavigation>
        </div>
    )
}
