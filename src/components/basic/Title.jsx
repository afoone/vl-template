import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Typography } from '@material-ui/core'
import './Title.css'

const Title = ({ title }) => {
    return (
        <div className="title-component">
            <PeopleAltIcon style={{ marginRight: "1rem", marginLeft: "1rem" }}></PeopleAltIcon>
            <Typography variant='h5' color='textPrimary'>
                {title}
            </Typography>
        </div>
    )
}

export default Title
