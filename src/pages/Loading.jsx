import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userRequest } from '../apiRequests'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { useHistory } from "react-router-dom";
import { CircularProgress } from '@material-ui/core'


const Loading = () => {
    let history = useHistory();
    const dispatch = useDispatch()

useEffect(() => {
    const getUser = async() => {
        dispatch(loginStart())
    try {
      const res =  await userRequest.get("/user/me")
      dispatch(loginSuccess(res.data))
      history.push("/dashboard");
      
      
    } catch (error) {
 
      dispatch(loginFailure())
      console.log(error.response)
    } 
}


    getUser()
}, [dispatch, history])


    return (
        <CircularProgress />
    )
}

export default Loading
