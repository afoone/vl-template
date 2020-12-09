import React from 'react'
import { useSelector } from 'react-redux'

const AdminPermissionHOC = ({ children }) => {

    const user = useSelector(state => state.auth.user)

    return (
        <>
            {
                user.role === "admin" && children
            }
        </>
    )
}

export default AdminPermissionHOC
