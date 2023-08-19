import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation } from 'react-router-dom';



const SystemDev = () => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div>
                <h2>{t(location.pathname.slice(10))}</h2>
        </div>
    );
}

export default SystemDev;