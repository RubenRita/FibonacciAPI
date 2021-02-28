import React,{ useState, useEffect} from 'react'
import {Card} from '../Components/Card/card';
import {Form} from '../Components/Form/form';

export const FibonacciPage = ()=>{

    const [number, setNumber] = useState([])
    const [addNumber, setAddNumber] = useState('')
    const [user ,setState] = useState([])

      const handleFormChange = (inputValue) => {
        setAddNumber(inputValue)
    }

    const handleFormSubmit = () =>
    {
        fetch('/api',{
            method:'POST',
            body: JSON.stringify({
                content:addNumber
            }),
            headers:{
                "content_type":"application/json; charset=UTF-8"
            },           
        }).then( response => {
            if(response.ok)
            {
                return response.json()
            }
        }).then(data => setNumber(data))
        .then(message => {
            console.log(message)                    
        })
    }

    return (
        <>
        <Form userInput = {addNumber} onFormChange = {handleFormChange} onFormSubmit = {handleFormSubmit}/>
        <Card listOfNumbers = {number}/>
        </>
    )
}