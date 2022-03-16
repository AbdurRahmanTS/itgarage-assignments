import React from 'react';
import LeftContact from './LeftContact/LeftContact';
import LineChart from './LineChart/LineChart';
import Media from './Media/Media';
import MenuBox from './MenuBox/MenuBox';
import OsAudienceStats from './OsAudienceStats/OsAudienceStats';

const LeftContent = () => {
    return (
        <div style={{width: "300px", textAlign: "center"}}>
            <MenuBox />
            <OsAudienceStats />
            <LineChart />
            <Media />
            <LeftContact />
        </div>
    );
};

export default LeftContent;