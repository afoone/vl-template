import { IconButton } from '@material-ui/core'
import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Logout = () => {
    return (
        <div>
            <IconButton>
                <ExitToAppIcon />
            </IconButton>
        </div>
    )
}
