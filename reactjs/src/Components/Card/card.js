import React from 'react';


export const Card = ({ listOfNumbers }) =>{
    return( 
    <>
        { listOfNumbers.map( number => {
            return (
                <div className="pure-menu custom-restricted-width">
                    <li className="pure-menu-item" key={number.toString()}>
                        {number.number}
                    </li>
                </div>                
            )
        })}
    </>)
}