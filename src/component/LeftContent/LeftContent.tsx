import React from 'react';
import MenuBox from './MenuBox/MenuBox';
import OsAudienceStats from './OsAudienceStats/OsAudienceStats';

const LeftContent = () => {
    return (
        <div style={{width: "300px", textAlign: "center"}}>
            <MenuBox />
            <OsAudienceStats />
        </div>
    );
};

export default LeftContent;