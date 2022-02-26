import React, { useImperativeHandle } from 'react';
   
export function Search({search, setSearch}) {

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
        return (
            <div className="search">
                <label htmlFor="search-people" className="material-icons"><i class="fa fa-search"></i></label>
                <input id="search-people" type="text" placeholder="Search" value={search} onChange={handleSearch} />
            </div>
        ); 
    
    }
 
