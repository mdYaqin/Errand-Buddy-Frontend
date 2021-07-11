import React from 'react'
import SiteHeader from './SiteHeader'
import '../Layout.css'

const Layout = ({ 
     title = "Title",
      description = "Description",className, 
      children
     }) => (

     
          <div>
               {/* <SiteHeader /> */}
          <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 class="display-4">{title}</h1>
            <p class="lead">{description}</p>
          </div>

          <div className={className}>{children}
          </div>
               </div>
               </div>


        
          
     


)
     

export default Layout
