import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import OpacityIcon from '@material-ui/icons/Opacity';
import { getModules } from '../../api/modulesApi'


export const ModulesMainHeader = () => {

  const [selected, setSelected] = useState(0)
  const [modules, setModules] = useState([])

  useEffect(() => {
    getModules().then(
      ({ data }) => {
        setModules(data)
      }
    )
  }, [])

  const patientsModule = modules.filter(i => i.name === "patients")[0];
  const waterModule = modules.filter(i => i.name === "water")[0];

  return (
    <div className='modules-main-header'>
      <BottomNavigation
        showlabels={'true'}
        value={selected}>
        {patientsModule && <BottomNavigationAction disabled={!patientsModule.enabled} label='Pacientes' icon={<PeopleAltIcon />} onClick={() => setSelected(0)} />}
        {waterModule && <BottomNavigationAction disabled={!waterModule.enabled} label='Aguas' icon={<OpacityIcon />} onClick={() => setSelected(1)} />}
      </BottomNavigation>
    </div>
  );
};
