import React,{ useState, useEffect} from 'react'
import axios from 'axios';
import {Card} from '../Components/Card/card';
import {Form} from '../Components/Form/form';

export const FibonacciPage = ()=>{

    const [number, setNumber] = useState([])
    const [addNumber, setAddNumber] = useState('')

      const handleFormChange = (inputValue) => {
        setAddNumber(inputValue)
    }

    const handleFormSubmit = event  => {
        const number = {
            content: addNumber
        };
        axios.post('/api',  number ).then( response => {
             return response.data                       
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