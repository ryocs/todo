import React from 'react';
import './Modal.scss';
import MaterialIcon from 'material-icons-react';
import {translateInstant} from '../../utilities/translateUtils';

const Modal = (props: any) => {

    const confirm = () => {
        console.log("JAP");
    }

    return (
        <div className="modal">
            <div className="card">
                <div className="title">
                    <span className="text">{props.title}</span>
                    <div className="close" onClick={e => props.onClose()}>
                        <MaterialIcon icon="close" size='medium'/>
                    </div>
                </div>
                <div className="content">
                    {props.children}
                </div>
                <div className="buttons">
                    {props.buttons}
                </div>
            </div>
        </div>
    );
}

export default Modal;