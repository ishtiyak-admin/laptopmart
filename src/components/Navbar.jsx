import React from 'react'

export const Navbar = () => {

  return (

        <nav className="navbar navbar-expand-lg  navbar2" >   
      <div className="container-fluid "  style={{backgroundColor: "#0A0A0A"}}>
        <a className="navbar-brand " href="#"><img src="images/lmlogo.png" className='icon' alt="Logo-Image-Loading" /></a>
       
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <a  href="https://api.whatsapp.com/send?phone=7976157614"><img src="images/whatsapp.png"  className="whatsapp-icon " alt="" /></a>
        </div>
      </div>
    </nav>
  )
}
