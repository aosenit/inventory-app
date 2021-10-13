import React from 'react'
import DashboardOne from '../../assets/DashboardOne.svg';
import DashboardTwo from '../../assets/DashboardTwo.svg';
import DashboardThree from '../../assets/DashboardThree.svg';
import DashboardFour from '../../assets/DashboardFour.svg';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../apiRequests';
import { Box, CircularProgress } from '@material-ui/core';

const DashboardSummary = () => {
    
    const [topItems, setTopItems] = useState({})
    const [loading, setLoading] = useState(false)

    const getTopItems = async() => {
        setLoading(true)
        try {
        const res =  await userRequest.get("/app/summary")
        setLoading(false)
        setTopItems(res.data)
          
        } catch (error) {
            setLoading(false)
          console.log(error.response)
        } 
    }

    useEffect(() => {
        getTopItems()
    }, [])

   
    return (
        <>
         {loading ? (<Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>) : (
                        <section className="topSection">
                        <Paper className="topSection__content" elevation={0}>
                          <div className="topSection__text">
                            <h5>Total Items</h5>
                            <h2>{topItems.total_group}</h2>
                          </div>
                          <div className="topSection__images">
                            <img src={DashboardOne} className="image" alt="topSection" />
                          </div>
                        </Paper>
              
                        <Paper className="topSection__content" elevation={0}>
                          <div className="topSection__text">
                            <h5>Total Inventory</h5>
                            <h2>{topItems.total_inventory}</h2>
                          </div>
                          <div className="topSection__images">
                            <img src={DashboardTwo} className="image" alt="topSection" />
                          </div>
                        </Paper>
              
                        <Paper className="topSection__content" elevation={0}>
                          <div className="topSection__text">
                            <h5>Total Shops</h5>
                            <h2>{topItems.total_shop}</h2>
                          </div>
                          <div className="topSection__images">
                            <img src={DashboardThree} className="image" alt="topSection" />
                          </div>
                        </Paper>
              
                        <Paper className="topSection__content" elevation={0}>
                          <div className="topSection__text">
                            <h5>Total Users</h5>
                            <h2>{topItems.total_users}</h2>
                          </div>
                          <div className="topSection__images">
                            <img src={DashboardFour} className="image" alt="topSection" />
                          </div>
                        </Paper>
                      </section>
                    )}
        
        </>
    )
}

export default DashboardSummary
