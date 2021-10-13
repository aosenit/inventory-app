import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../../apiRequests'
import { Box, CircularProgress } from '@material-ui/core';

const DashboardPurchases = () => {
    const [purchases, setPurchases] = useState({})
    const [loading, setLoading] = useState(false)

    const getPurchases = async() => {
        setLoading(true)
        try {
        const res =  await userRequest.get("/app/purchases-summary")
        setLoading(false)
        setPurchases(res.data)
          
        } catch (error) {
            setLoading(false)
          console.log(error.response)
        } 
    }

    useEffect(() => {
        getPurchases()
    }, [])
    return (
        <>
         {loading ?
         (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) : (
            <div>
            <div className="top">
             <h5>Purchases</h5>
           </div>
           <div className="priceCount">
             <div>
               <h4>
                 NGR 
                 <span className="bold">{purchases.price}</span>
               </h4>
               <h5>(price)</h5>
             </div>

             <div>
               <h4 className="bold">{purchases.count}</h4>
               <h5>(count)</h5>
             </div>
           </div>
       </div>
         )}
                    
       
        </>
    )
}

export default DashboardPurchases
