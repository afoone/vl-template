import React from 'react';
import { useTranslation } from 'react-i18next';


export default (props) => {


    const { t } = useTranslation();

    const image = props.value === 'Hombre' ? 'male.png' : 'female.png';
    const translation = props.value === 'Hombre' ? t("man") : t("woman")
    const imageSource = `https://www.ag-grid.com/images/${image}`;
    return (
        <span>
            <img src={imageSource} />
            {translation}
        </span>
    );
};