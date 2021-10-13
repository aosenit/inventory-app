import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userRequest } from '../apiRequests'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { useHistory } from "react-router-dom";
import { CircularProgress } from '@material-ui/core'


const Loading = () => {
    let history = useHistory();
    const dispatch = useDispatch()


    const getUser = async() => {
        dispatch(loginStart())
    try {
      const res =  await userRequest.get("/user/me")
      dispatch(loginSuccess(res.data))
      console.log(res.data)
      history.push("/dashboard");
      
      
    } catch (error) {
 
      dispatch(loginFailure())
      console.log(error.response)
    } 
}

useEffect(() => {
    getUser()
}, [])
    return (
        <CircularProgress />
    )
}

export default Loading
