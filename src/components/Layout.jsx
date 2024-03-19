import React from 'react'
import Footer from './header&footer/Footer'
import Header from './header&footer/Header'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div style={{padding:'100px 2% 20px 2%', background:"black", color:'white'}}>
        {children}
        </div>
   
        <Footer/>
      
    </>
  )
}

export default Layout