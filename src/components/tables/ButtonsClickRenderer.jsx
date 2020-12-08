import { Button } from '@material-ui/core'
import React from 'react'

const ButtonsClickRenderer = ({ context, value }) => {
    return (
        <div>
            <Button variant="contained" color="primary" size="small"
                onClick={() => context.edit(value)}>Editar</Button>
        </div>
    )
}

export default ButtonsClickRenderer
