import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import MiddleContent from '../MiddleContent/MiddleContent';
import RightContent from '../RightContent/RightContent';

const Content = () => {
    return (
        <div style={{display: "flex", color: "white"}}>
            <LeftContent />
            <MiddleContent />
            <RightContent />
        </div>
    );
};

export default Content;