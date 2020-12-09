import { Button, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import AdminPermissionHOC from '../../auth/AdminPermissionHOC';


const ButtonsClickRenderer = ({ context, value }) => {

    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const edit = (value, viewMode) => {
        context.edit(value, viewMode);
        setAnchorEl(null)
    }

    return (
        <div className="button-cell-renderer">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                variant="contained" color="primary" size="small"
            >...</Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <AdminPermissionHOC>
                    <MenuItem onClick={() => edit(value)}>{t("edit")}</MenuItem>
                </AdminPermissionHOC>
                <MenuItem onClick={() => edit(value, true)}>{t("view")}</MenuItem>

            </Menu>
        </div>
    )
}

export default ButtonsClickRenderer
