import React from "react";

const Searchbox = ({searchfield, searchChange}) => {
    return (
    <div>
        <input type="search" 
        placeholder="Search your Robots here" 
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange} />
    </div>
    );
}

export default Searchbox;