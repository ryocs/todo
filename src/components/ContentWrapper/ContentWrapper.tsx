import React, { useEffect, useState } from 'react';
import './ContentWrapper.scss';

const ContentWrapper = (props: any) => {

    return (
        <div className="content-wrapper" style={props.style}>{props.children}</div>
    );
}

export default ContentWrapper;