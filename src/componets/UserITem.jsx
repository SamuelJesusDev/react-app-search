import React from 'react';
   
export function UserITem({user}) {
        return (
            <div className="result">
      <div className="circle">
        <img className="result__avatar" src={user.avatar} />
      </div>
      <div className="result__info">
        <h4 className="result__name">{user.first_name}</h4>
        <p className="result__description">{user.employment.title}</p>
        
      </div>
    </div>
        ); 
    
    }
 