import React, { useEffect, useState } from 'react';
import MaterialIcon from 'material-icons-react';
import './Header.scss';

type HeaderProps = {
    title: string,
    btnClicked?: any,
    onAdd?: any
}

const Header = (props: HeaderProps) => {

    return (
        <div className="header">
            <span className="title">
                {props.title}
            </span>
            <span className="btn" onClick={e => props.onAdd()}>
                <MaterialIcon icon="add" size='medium'/>
            </span>
        </div>
    );
}

export default Header;