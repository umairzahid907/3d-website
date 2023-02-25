
import './App.css';
import Image1  from './media/ARMY1.jpeg';
import Image2  from './media/6.png';

function Description() {
  
  return (
    <>
<div className='d-flex justify-content-between mx-5'>

<div className='d-flex flex-column  align-items-start  width_60 height_80'>
<div className='height_80'></div>
  <div className='d-flex  width_100'><button type="button" class="btn btn-block  glow-button btn-outline-light  _360_button_styling footer_button" data-toggle="collapse" data-target="#demo">1</button><div className='ml-5'><h2>Large Scale Multiplayer</h2></div></div>
  <div id="demo" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</div>
<div className='height_20 white width_80'></div>
<div className='height_30'></div>
  <div className='d-flex width_100'> <button type="button" class="btn btn-block  glow-button btn-outline-light  _360_button_styling footer_button" data-toggle="collapse" data-target="#demo1">2</button><div className='ml-5'><h2>Medium Scale Multiplayer</h2></div></div>
  <div id="demo1" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</div>


<div className='height_20 white width_80'></div>
<div className='height_30'></div>
<div className='d-flex width_100'> <button type="button" class="btn btn-block  glow-button btn-outline-light  _360_button_styling footer_button" data-toggle="collapse" data-target="#demo2">3</button><div className='ml-5'><h2>Small Scale Multiplayer</h2></div></div>
  <div id="demo2" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</div>
<div className='height_20 white width_80'></div>

</div>






<div  className='d-flex width_50'>

<img src={Image2} width="1000" height="300" className="img-fluid rounded-circle shadow-4 imgstyle3"  alt="Responsive image"></img>
</div>
 
</div>
   </>
  );
}

export default Description;
