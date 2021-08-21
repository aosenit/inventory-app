import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function SelectShop() {
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
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
              <h3>INVENTORY</h3>
           
          </div>
          <InputLabel id="label">
            <h5 style={{ color: 'black' }}>Shop</h5>
          </InputLabel>
          <Select
            style={{
              width: '100%',
              marginTop: '20px',
              marginBottom: '40px',
              border: 'solid 1px var(--grayColor)',
              height: '3.7rem',
              padding: '5px'
            }}
            labelId="label"
            id="select"
            value="20"
            placeholder="Select a shop to sell from"
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>

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
