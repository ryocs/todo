import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import './List.scss';
import { GlobalContext, useGlobalContext } from '../../services/globalContext';

const List = (props: any) => {

    const { listData, setData, searchValue } = useGlobalContext();
    
    const deleteItem = (id: number) => {
        setData(listData?.filter(ds => ds.id !== id));
    }

    const updateItem = (id: number, args: any) => {
        let data = [...listData!];
        data.forEach((ds, index) => {
            if (ds.id === id) {
                Object.keys(args).forEach(key => {
                    data[index][key] = args[key];
                });
            }
        }); 
        setData(data);
    }

    return (
        <div className="list" style={props.style}>
        {
            listData !== undefined && listData.length > 0 ? 
                (listData.filter(ds => ds.title.toLowerCase().includes(searchValue?.toLowerCase()))
                    .map((el: any) => <ListItem key={el.id} dataObject={el} deleteItem={id => deleteItem(id)} updateItem={(id,args) => updateItem(id, args)}/>)) 
                : ""
        }
        </div>
    );
}

export default List;