import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CreateUser() {
   
    const [fullname, setFullname] = useState('')
    const [role, setRole] = useState('Add Role');
    const handleSubmit = (e) => {
       e.preventDefault() 

       const createUserInfo = {
          fullname,
          role
       }

       console.log(createUserInfo)
        
    }
    return (
      <div>
        <form>
          Full Name:{' '}
          <input
            type="text"
            name="FullName"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          Role:{' '}
          <select
            name="Role"
            defaultValue={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="creator">Creator</option>
            <option value="sales">Sales</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <p>
          <Link to="/login"> New User?</Link>
        </p>
      </div>
    );
}

export default CreateUser
