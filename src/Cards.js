
import './App.css';
import Image2  from './media/6.png';

function Card() {

  return (
    <>
<div className="row mt-1">


 <div className="col-md-3 ">
    <div className=" card card_multi" >
      <div className="card-body">
        <div className='margin_left_1 height_20'>
        <img className="img-fluid rounded-circle border  border-3 imgstyle1 " src={Image2} alt='' />
        </div>
        <h3 className="card-title height_20">Club Penguin</h3>
        <div className="d-flex justify-content-around">
        <p className="card-text font_size description_text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam </p>
        </div>
        <div className="height_30">
        <button type="button" class="btn btn-block  glow-button btn-outline-light  footer_button" >Show</button>
        </div>
        <div className="height_20">
        </div>
      </div>
    </div>
    </div>


    <div className="col-md-3 height_80">
    <div className="card card_multi" >
      <div className="card-body">
      <div className='margin_left_1 height_20'>
        <img className="img-fluid rounded-circle border  border-3 imgstyle1 " src={Image2} alt='' />
        </div>
        <h3 className="card-title height_20">Club Penguin</h3>
        <p className="card-text font_size description_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius </p>
            <div className="height_30">
        <button type="button" class="btn btn-block  glow-button btn-outline-light  footer_button" >Show</button>
        </div>
        <div className="height_20">
        </div>
      </div>
    </div>
</div>


<div className="col-md-3">
    <div className="card card_multi" >
      <div className="card-body">
      <div className='margin_left_1 height_20'>
        <img className="img-fluid rounded-circle border  border-3 imgstyle1 " src={Image2} alt='' />
        </div>
        <h3 className="card-title height_20">Club Penguin</h3>
        <p className="card-text font_size description_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius </p>
            <div className="height_30">
        <button type="button" class="btn btn-block  glow-button btn-outline-light  footer_button" >Show</button>
        </div>
        <div className="height_20">
        </div>
      </div>
    </div>
</div>


<div className="col-md-3 height_80">
    <div className="card card_multi" >
      <div className="card-body">
      <div className='margin_left_1 height_20'>
        <img className="img-fluid rounded-circle border  border-3 imgstyle1 " src={Image2} alt='' />
        </div>
        <h3 className="card-title height_20">Club Penguin</h3>
        <p className="card-text font_size description_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius </p>
            <div className="height_30">
        <button type="button" class="btn btn-block  glow-button btn-outline-light  footer_button" >Show</button>
        </div>
        <div className="height_20">
        </div>
      </div>
    </div>
</div>


</div>
   </>
  );
}

export default Card;
