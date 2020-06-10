import React from "react";

const Scroll = (props) => {
// return props.children 
// we just intend to tell 
// // scroll all the things enclosed in using children
     return (<div style = {{overflowY: 'scroll', border:'5px solid black', height: '800px'}}> 
     {/*  double curly bracets showing -- 1) javascript expression 2) object */}
        {props.children}
    </div>)
}; 
export default Scroll ; 
