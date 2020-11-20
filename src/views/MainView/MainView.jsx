import { MainHeader } from '../../components/MainHeader/MainHeader';
import ControlAguasModule from '../ControlAguasModule/ControlAguasModule';
import PatientsModule from '../PatientsModule/PatientsModule';
import './MainView.css';
import { CONTROL_AGUAS_VIEW, PATIENTS_VIEW } from '../../views';
import { useCallback, useState } from 'react';
import { Box } from '@material-ui/core';

export const  MainView = () =>  {
    const [view, setView] = useState(PATIENTS_VIEW);

    const changeView = useCallback(
        (view) => {
            setView(view)
        },
        [],
    )

    return (
        <div className='main-view'>
            <div className='main-view__main-header'>
                <MainHeader changeView = {changeView}></MainHeader>
            </div>
            <Box display='flex' className='main-view__main-content'>
                {(view === PATIENTS_VIEW) && <PatientsModule/>}
                {(view === CONTROL_AGUAS_VIEW) && <ControlAguasModule/>}
            </Box>
        </div>
    )
}
