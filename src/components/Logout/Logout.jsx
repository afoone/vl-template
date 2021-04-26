import { IconButton } from '@material-ui/core'
import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/actions/auth';
import {useRouter} from "next/router"


export const Logout = ({ children }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const logoutClick = ()=>{
        router.push("/");
        dispatch(logout())
    }
    return (
        <div>
            <IconButton onClick={() =>logoutClick()} >
                {children}
                <ExitToAppIcon />
            </IconButton>
        </div>
    )
}
