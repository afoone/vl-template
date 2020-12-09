import { Button } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';


const ButtonsClickRenderer = ({ context, value }) => {

    const {t} = useTranslation();
    
    return (
        <div>
            <Button variant="contained" color="primary" size="small"
                onClick={() => context.edit(value)}>{t("edit")}</Button>
        </div>
    )
}

export default ButtonsClickRenderer
