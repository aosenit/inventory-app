import { Box, CircularProgress, Paper } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../../apiRequests'

const DashboardTopselling = () => {
    const [topSelling, setTopSelling] = useState(null)
    const [loading, setLoading] = useState(false)

    const getTopSelling = async() => {
        setLoading(true)
        try {
        const res =  await userRequest.get("/app/top-selling")
        setLoading(false)
        setTopSelling(res.data)
          
        } catch (error) {
            setLoading(false)
          console.log(error.response)
        } 
    }

    useEffect(() => {
        getTopSelling()
    }, [])



    return (
        <>
         {loading ?
         (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) : (
              <>
            {topSelling &&  topSelling.map(tp => {
                    return (
                        <Paper className="bottom__content"     elevation={0} key={tp.id}>
                            <div className="topSellingImage">
                            <img
                            src={tp.photo}
                            alt="topSale"
                            />
                            </div>
                            <h4>{tp.name}</h4>
                            <h5>{tp.price}</h5>
                        </Paper>
                    )
                })}
      </>
         )} </>
     
    )
       
    
}

export default DashboardTopselling
