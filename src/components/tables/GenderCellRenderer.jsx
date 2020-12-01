import React from 'react';

export default (props) => {
    const image = props.value === 'Hombre' ? 'male.png' : 'female.png';
    const imageSource = `https://www.ag-grid.com/images/${image}`;
    return (
        <span>
            <img src={imageSource} />
            {props.value}
        </span>
    );
};