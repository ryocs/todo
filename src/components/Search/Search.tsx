import React, { useEffect, useState } from 'react';
import MaterialIcon from 'material-icons-react';
import translateInstant from '../../utilities/translateUtils';
import './Search.scss';

type SearchProps = {
    onChange?: any
}

const Search = (props: SearchProps) => {

    const [searchValue, setSearchValue] = useState("");

    const updateSearch = (searchString: string) => {
        setSearchValue(searchString);
        if (props.onChange !== undefined)
            props.onChange(searchString);
    }

    return (
        <div className="float-label">
            <input type="text" name="Name" id="name" placeholder=" " onChange={e => updateSearch(e.target.value)} value={searchValue}></input>
            <label><MaterialIcon icon="search" size='small'/>{translateInstant("L_SEARCH","Suchen")}</label>
        </div>
    );
}

export default Search;