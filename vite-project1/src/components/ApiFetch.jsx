import React from 'react'
import { useState,useEffect } from 'react'

export default function ApiFetch() {
     const [counties, setCountries] = useState([])
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(null)
    
       useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch('https://restcountries.com/v3.1/all')
                const json = await response.json()
               
                setCountries(json)
                setLoading(false)
                

            }catch(error){
                setError(error)
                setLoading(false)

            }
        }
         fetchData()

       }, [])
    
       if(loading) return<p>Loading</p>
       if(error) return <p>Error</p>

  return (
   <>
   <h1>Countries</h1>
    {
        <ul>
            {
                counties.map((country)=>(
                     <li key={country.cca3}>{country.name.common}</li>
                ))
            }
        </ul>
    }
      </>
 
    
  );
};
