import './App.css';
import Image1  from './media/5.1.png';
import Image2  from './media/6.png';
function Favicon(){
    return(
     <>
<div className='d-flex justify-content-between  mx-5'>

<div className='d-flex flex-column width_40 '>
<h3 className="card-title">The Club</h3>
<h1 className="card-title">Penguin</h1>
<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
<div className='padding '>
    <img src={Image1} className="img-fluid rounded-circle shadow-4"  alt="Responsive image"></img>
</div>
</div>


<div  className='d-flex width_60  '>
<div className="row mt-1">

<div className="col-md-6">
    <div className="card card_multi" >
      <div className="card-body">
        <img className="img-fluid rounded-circle border  border-3 imgstyle2" src={Image2} alt='' ></img>
        <h3 className="card-title height_20">Club Penguin</h3>
        <div className="d-flex justify-content-around">
        <p className="card-text font_size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam </p>
        </div>
      </div>
    </div>
</div>

 
<div className="col-md-6">
    <div className="card card_multi" >
      <div className="card-body">
        <img className="img-fluid rounded-circle border  border-3 imgstyle2" src={Image2} alt='' ></img>
        <h3 className="card-title height_20">Club Penguin</h3>
        <div className="d-flex justify-content-around">
        <p className="card-text font_size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam </p>
        </div>
      </div>
    </div>
</div>

<div className="col-md-6">
    <div className="card card_multi" >
      <div className="card-body">
        <img className="img-fluid rounded-circle border  border-3 imgstyle2" src={Image2} alt='' ></img>
        <h3 className="card-title height_20">Club Penguin</h3>
        <div className="d-flex justify-content-around">
        <p className="card-text font_size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam </p>
        </div>
      </div>
    </div>
</div>

<div className="col-md-6">
    <div className="card card_multi" >
      <div className="card-body">
        <img className="img-fluid rounded-circle border  border-3 imgstyle2" src={Image2} alt='' ></img>
        <h3 className="card-title height_20">Club Penguin</h3>
        <div className="d-flex justify-content-around">
        <p className="card-text font_size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam </p>
        </div>
      </div>
    </div>
</div>

</div>

</div>
 
</div>



     </>
    );
}

export default Favicon;