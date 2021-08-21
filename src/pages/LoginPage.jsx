import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import axios from 'axios';
import requests from '../apiCalls/api';



function LoginPage() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('');

 const handleLogin = (e) => {
   e.preventDefault()
   const loginInfo = {
     name,
     password
   }

   console.log(loginInfo)
 }
  
    useEffect(() => {
      // const getWhatever = async () => {
      //   try {
      //     const request = await axios.post(
      //       'https://api.devtot.com:2087/user/login',
      //       {
      //         headers: {
      //           token:
      //             'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjc1NjQyMTIsInVzZXJfaWQiOjF9.7RsaqGiDhZ2qPPdp2z7nShazQZ8HxEabkefq8VfCD5I ',
      //         },
      //       }
      //     );

      //     console.log(request);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // getWhatever();
    }, []);


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
            <Button size="medium">
              <StopIcon style={{ color: '#00E85D', fontSize: '30px' }} />
              <h4>Inventory</h4>
            </Button>
          </div>

          <form
            className="loginForm"
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
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />

            <h5>Password</h5>
            <TextField
              style={{
                width: '100%',
                marginTop: '10px',
                marginBottom: '20px',
              }}
              id="outlined-basic"
              value={password}
              variant="outlined"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
            >
              Login
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
