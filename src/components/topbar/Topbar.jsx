import React from 'react'
import './Topbar.css'
import SelectInput from '../SelectInput'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

function Topbar({isHeaderbtn}) {

 
    return (
      <div className="topbar">
        <SelectInput />

        <div className="topbarRight">
          {isHeaderbtn && <Button variant="contained" className='topbarButton'>New Invoice</Button>}
          <div className="topbarSelect">
            <Avatar className='selectAvatar' alt="Baker" src="/static/images/avatar/3.jpg" />
            <select name="" id="">
              <option value="">Micheal</option>
              <option value="">Micheal</option>
              <option value="">Micheal</option>
            </select>
          </div>
        </div>
      </div>
    );
}

export default Topbar

