import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';

const Layout =({children}) =>{
    return(
        <>
            <Topbar/>
            <Sidebar/>
           <main>{children}</main>
        </>
    )
}

export default Layout;
