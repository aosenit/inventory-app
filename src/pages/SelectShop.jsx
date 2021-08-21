import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import SelectComponent from '../components/SelectComponent';
import StopIcon from '@material-ui/icons/Stop';


function SelectShop() {
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
            className=""
            style={{
              marginBottom: '40px',
              fontSize: '14px',
            }}
          >
            <Button size="medium">
              <StopIcon style={{ color: '#00E85D', fontSize: '30px' }} />
              <h4>Inventory</h4>
            </Button>
          </div>
          <InputLabel id="label">
            <h5 style={{ color: 'black' }}>Shop</h5>
          </InputLabel>
          <SelectComponent />

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
          >
            <h4>Enter</h4>
          </Button>
        </div>
      </div>
    );
}

export default SelectShop
