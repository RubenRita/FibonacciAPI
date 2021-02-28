import React from 'react';

export const Form = ({userInput, onFormChange, onFormSubmit}) =>{
    const handleChange = (event) => 
    {
        onFormChange(event.target.value)        
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        onFormSubmit()        
    }

    return(
    <>
    <div>
        <h2 className="splash-head">Fibonacci Number</h2>
    </div>
    <div>
        <p className="splash-subhead">Please enter a number! to get the n'th fibonacci number!</p>  
        <form className="pure-form" onSubmit={handleSubmit}>
            <div className="pure-control-group" >
                <input type='text' className="pure-input-rounded" required value={userInput} onChange={handleChange}></input>
                <input type='submit' className="pure-button pure-button-primary"></input>    
            </div>            
        </form>   
    </div>
    
        
    </>)
}