import Image1 from './media/rejected.png'
import { Link } from "react-router-dom"

function Menu()  {
    return (
     <>
     <div className='height_80'></div>
     <div className='d-flex flex-column  align-items-center sticky bg_menu align-items-end justify-content-around '>
<div className='d-flex justify-content-between mx-5 py-3 width_80'>

  <h2 className='main_heading2'>THE CLUB</h2>
<Link to="/"><img  type="button"  src={Image1} width="50" class="img-fluid" alt="Responsive image"></img></Link> 
 </div>
<div className='d-flex justify-content-between mx-5 align-items-end'>

<div className='d-flex flex-column align-items-flex-start width_40 '>

<div className=''><h1 className='main_heading1'>THE CLUB</h1><h1 className='main_heading1'>PENGUIN</h1>
</div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum

<div className='d-flex align-items-baseline'>

</div>

</div>


<div className='d-flex width_50 flex-column align-items-end' >

<div className="font_size"><a href="" className='white_text' target="_blank" rel="noopener noreferrer"> quas vel sint commodi consequuntur</a> </div>
<div className="font_size mt-4"> <a href="" className='white_text'  target="_blank" rel="noopener noreferrer"> quas vel sint commodi consequuntur</a> </div>
<div className="font_size mt-4"><a href="" className='white_text' target="_blank" rel="noopener noreferrer"> quas vel sint commodi consequuntur</a> </div>
</div>



</div>

<div className="white width_100"></div>

<div className='d-flex justify-content-between mx-5 py-3 width_80'>

 <button type="button" className="btn btn-block footer_button glow-button btn-outline-light  white_button_styling width_40">Play</button>
 <div  className='d-flex align-items-center'><div className="font_size mt-4 px-2"><a href="" className='white_text' target="_blank" rel="noopener noreferrer"> quas vel sint commodi consequuntur</a> </div>
 <div className="font_size mt-4 px-2"><a href="" className='white_text' target="_blank" rel="noopener noreferrer"> quas vel sint commodi consequuntur</a> </div></div>


  </div>

</div>
     </>
    );
  }
  
  export default Menu;
  