import React from 'react'
import './MainLogo.css';

export const MainLogo = () => {
    const logoPath = process.env.PUBLIC_URL + 'assets/img/'

    return (
        <div className='main-logo'>
            <img
                src={`/assets/img/nefrosoft-logo.png`}
                alt="Logo nefro" />
        </div>
    )
}