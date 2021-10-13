import React, { useEffect, useState } from 'react'
import { userRequest } from './apiRequests';

const useSearch = (url, word) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const getSearch = async() => {
         setLoading(true)
         setError(false) 
       try {
         const res =  await userRequest.get(`${url}${word}`)
         const newInvoice = (res.data.results)
         setData(newInvoice)
         setLoading(false)
         setError(false)
         
       } catch (error) {
        setLoading(false)
        setError(true)
         console.log(error.message)
       } 
   
      }
   
      getSearch()
     }, [word])

     return {data, loading, error}
}

export default useSearch
