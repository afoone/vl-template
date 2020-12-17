import { IconButton } from '@material-ui/core'
import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Logout = ({ children }) => {
    return (
        <div>
            <IconButton>
                {children}
                <ExitToAppIcon />
            </IconButton>
        </div>
    )
}
