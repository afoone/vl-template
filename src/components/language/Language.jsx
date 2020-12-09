import React, { useState } from 'react'
import { Select,  MenuItem } from '@material-ui/core'
import i18n from '../../i18n'
import { IconFlagUK, IconFlagES } from 'material-ui-flags'
import { useSelector, useDispatch } from 'react-redux'
import {update} from '../../redux/actions/auth'

export const Language = () => {

    const [language, setLanguage] = useState(i18n.language || "es")
    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch()

    const changeLanguage = e => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value) 
        // TODO: ¿Qué pasa con el thunk?
        dispatch(update({...user, language: e.target.value}))
        
    }

    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={changeLanguage}
            >
                <MenuItem value="es"><IconFlagES /> </MenuItem>
                <MenuItem value="en"><IconFlagUK /> </MenuItem>
            </Select>
        </div>
    )
}

export default Language
