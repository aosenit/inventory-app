import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SelectComponent() {
  return (
    <Select
      style={{
        width: '100%',
        marginTop: '20px',
        marginBottom: '40px',
        border: 'solid 1px var(--grayColor)',
        height: '3.7rem',
        padding: '5px',
      }}
      labelId="label"
      id="select"
      value="20"
      placeholder="Select a shop to sell from"
    >
      <MenuItem value="10">Ten</MenuItem>
      <MenuItem value="20">Twenty</MenuItem>
    </Select>
  );
}

export default SelectComponent;
