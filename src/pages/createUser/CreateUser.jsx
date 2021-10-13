import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { publicUser } from '../../redux/userSlice';





function CreateUser() {
    let history = useHistory();
    const dispatch = useDispatch()
    const { register, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false)


    const handleCreateUser =  (data) => {
      setLoading(true)

      try {
       if(data.password === data.confirmPassword){
        dispatch(publicUser(data))
        setLoading(false)
        history.push("/login")
       }else{
        alert("password do not tally, please rewrite")
       }
      } catch (error) {
        setLoading(false)
        console.log(error.response);
        
      }
      
   
    }


    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          backgroundColor: 'var(--primaryColor)',
        }}
      >
        <div
          className="loginContainer"
          style={{
            width: '20%',
          }}
        >
          <div
            className="loginHeader"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              marginBottom: '40px',
              fontSize: '14px',
            }}
          >
            <h4>Sign Up</h4>
            <Link to="/">
              <Button size="medium">
              <StopIcon style={{ color: '#00E85D', fontSize: '30px' }} />
              <h4>Inventory</h4>
            </Button>
            </Link>
          </div>

          <form
            className="loginForm"
            onSubmit={handleSubmit(handleCreateUser)}
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <h5>Name</h5>
            <TextField
              style={{
                width: '100%',
                marginTop: '10px',
                marginBottom: '20px',
              }}
              id="outlined-basic"
              variant="outlined"
              {...register('fullname', { required: true })}
            />

            <h5>Email</h5>
              <TextField
                style={{
                  width: '100%',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
                id="outlined-basic"
                type="email"
                
                variant="outlined"
                {...register('email', { required: true })}
            />

            <h5>Password</h5>
              <TextField
                style={{
                  width: '100%',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
                id="outlined-basic"
                type="password"
                variant="outlined"
                {...register('password', { required: true })}
            />

            <h5>Confirm Password</h5>
              <TextField
                style={{
                  width: '100%',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
                id="outlined-basic"
                type="password"
                variant="outlined"
                {...register('confirmPassword', { required: true })}
            />
      
        <h5>Role</h5>

        <select {...register("role")}  style={{
                width: '100%',
                marginTop: '20px',
                marginBottom: '20px',
                border: '1px solid rgba(0,0,0,.2)',
                borderRadius: '5px',
                height: '3.8rem',
              }}>
        <option value="creator">creator</option>
        <option value="admin">admin</option>
        <option value="sales">sales</option>
      </select>
           

            <Button
              style={{
                width: '100%',
                marginTop: '20px',
                marginBottom: '20px',
                height: '3.8rem',
                backgroundColor: '#269962',
              }}
              variant="contained"
              color="secondary"
              type="submit"
            >
             {loading ? (<><h4 style={{paddingRight: '20px'}}>Loading...</h4> <CircularProgress  color="inherit" /></>) : <h4>create user</h4> }
            </Button>

            <div
              style={{
                fontSize: '10px',
                color: 'rgba(68, 81, 194, 1)',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <Link to="/login"> <h3>login</h3></Link>
            </div>
          </form>
        </div>
      </div>
    );
}

export default CreateUser
