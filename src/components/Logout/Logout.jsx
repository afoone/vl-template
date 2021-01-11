import { IconButton } from '@material-ui/core'
import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/actions/auth'

export const Logout = ({ children }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <IconButton onClick={() => dispatch(logout())} >
                {children}
                <ExitToAppIcon />
            </IconButton>
        </div>
    )
}
