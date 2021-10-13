import React from 'react'

import { Link } from 'react-router-dom'

import "./HomePage.css"



const HomePage = () => {
 



    return (
        <div className="home">
            <div className="homeTexts">
                <h1>THE INVENTORY APP</h1>
                  <div className="homeRoutes">
                  <Link className="homeLink"  to='/login'>Login</Link>
                  <Link className="homeLink" to='/create-user'>Sign up</Link> 
                  </div>
            </div>

         
            <div className="backCover"></div>
        </div>
    )
}

export default HomePage
