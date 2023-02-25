import './App.css';
import React from 'react'
import { Link } from "react-router-dom"
import LandingPage from './LandingPage'
import Image1  from './media/menu.png'
import Footer from './footer'

function Main() {
  return (
    <>

<div className='d-flex justify-content-between mx-5 py-3 sticky-top '>
   <div > <h1  className='main_heading'>Cryptoclub</h1></div>  <div > <h1 className='main_heading'></h1></div>
 <div>
<div  className='d-flex align-items-center'> <Link to="/360-view"> <button type="button" class="btn btn-block footer_button  glow-button btn-outline-light  _360_button_styling ">360 view</button> </Link>
<Link to="/menu"><img  type="button"  src={Image1} width="80" class="img-fluid" alt="Responsive image"></img></Link></div>
</div>
 </div>
   <LandingPage />
   <div className='height_120'></div>
   <div  className='height_120'>
     <Footer/>
</div>
 </>
  )
}

export default Main;
