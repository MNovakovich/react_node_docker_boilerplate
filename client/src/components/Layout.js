import React, {Fragment} from 'react'
import Navbar  from './Navbar/Navbar'


 const Layout = (props) => {
    return (
        <Fragment>
            
            <Navbar />
            <div className="main" style={{background:'#f5f5f5'}}> 
                
                <div style={{ maxWidth:'1000px', minHeight: '93vh' }}>
                   {props.children}
                </div>
            </div>
            
        </Fragment>
    )
}

export default Layout;