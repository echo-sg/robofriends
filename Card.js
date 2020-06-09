import React from 'react';
// it is important else we cannot use html like as it is normally

const Card = ({name,email,id}) => {
    return (
        <div className= "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
              <img  alt = "myphoto" src ={`https://robohash.org/${id}?200x200`} />
              {/* js used isliye src bhi curly brackets ke andar */}
                <div>
                <h2>{name} </h2>
                <p>{email}</p>
                </div>
        </div>
    );
} 
export default Card;