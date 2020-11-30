import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import OpacityIcon from '@material-ui/icons/Opacity';
import { CONTROL_AGUAS_VIEW, PATIENTS_VIEW } from '../../views';

import './ModulesMainHeader.css';

export const ModulesMainHeader = props => {

  const [selected, setSelected] = useState(0)

  return (
    <div className='modules-main-header'>
      <BottomNavigation
        showlabels={'true'}
        value={selected}
      // onChange={(event, newValue) => {
      //     setValue(newValue);
      // }}
      >
        <BottomNavigationAction label='Pacientes' icon={<PeopleAltIcon />} onClick={() => setSelected(0)} />
        <BottomNavigationAction label='Aguas' icon={<OpacityIcon />} onClick={() => setSelected(1)} />
      </BottomNavigation>
    </div>
  );
};
