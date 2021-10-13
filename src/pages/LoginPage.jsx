import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import { useForm } from "react-hook-form";
import { publicRequest } from '../apiRequests';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from "react-router-dom";




function LoginPage() {
  const {publicUser} = useSelector(state => state.user)
  let history = useHistory();
  const { register, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false)
  
  
  const handleLogin =  async (data) => {

    if(data.email === publicUser.email && data.password === publicUser.password){
      setLoading(true)
            try {
              const response = await publicRequest.post("user/login", {email:'public@gmail.com', password:"public1234"});

            localStorage.setItem("userToken", JSON.stringify(response.data.access))
            
            history.push("/loading");
              window.location.reload();
            
              
            } catch (error) {
              setLoading(false)
              console.log(error.response)
            }
    } else{
      alert('please enter correct password and email')
      return
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
            <h4>Sign In</h4>
            <Link to="/">
              <Button size="medium">
              <StopIcon style={{ color: '#00E85D', fontSize: '30px' }} />
              <h4>Inventory</h4>
            </Button>
            </Link>
            
          </div>

          <form
            className="loginForm"
            onSubmit={handleSubmit(handleLogin)}
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
            }}
          >
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
              {...register('password', { required: true })}
              variant="outlined"
              type="password"
              autoComplete="current-password"
            />

            <Button
              style={{
                width: '100%',
                marginTop: '10px',
                marginBottom: '20px',
                height: '3.8rem',
                backgroundColor: '#269962',
              }}
              variant="contained"
              color="secondary"
              type='submit'
            >
             {loading ? (<><h4 style={{paddingRight: '20px'}}>Logging</h4> <CircularProgress  color="inherit" /></>) : <h4>Login</h4> } 
            </Button>

            <p
              style={{
                fontSize: '10px',
                color: 'rgba(68, 81, 194, 1)',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}

              // onClick= {() => history.push("/create-user")}
            >
              <Link to="/create-user"> New User?</Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default LoginPage
