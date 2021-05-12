import React, { useEffect, useState } from 'react';
import './List.scss';
import MaterialIcon from 'material-icons-react';

const ListItem = (props: any) => {

    return (
        <div className="list-item">
            <div className={props.dataObject.completed ? "list-item-name strike" : "list-item-name"}>{props.dataObject.title}</div>
            <div className="list-item-settings flex flex-center">
                <div className="checkBox">
                    <input 
                        type="checkbox" 
                        name="donechbx" 
                        id="donechbx" 
                        className="list-item-state" 
                        onChange={e => props.updateItem === undefined ? null : props.updateItem(props.dataObject.id, {completed: e.target.checked})} 
                        defaultChecked={props.dataObject.completed}
                    />
                    <label></label>
                </div>
                <div className="btn" onClick={() => props.deleteItem === undefined ? null : props.deleteItem(props.dataObject.id)}>
                    <MaterialIcon icon="delete" size='medium'/>
                </div>
            </div>
        </div>
    );
}

export default ListItem;