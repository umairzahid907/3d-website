import {Suspense, useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {Canvas } from '@react-three/fiber'
import Image1 from './media/1.png'
import Image2 from './media/2.png'
import Image3 from './media/3.png'
import Image4  from './media/menu.png'
import {OrbitControls} from '@react-three/drei'
import { Model as P2} from './P2'
import { Model as P3} from './P3'
import { Model as P1} from './P1'
import './index.css';
import {useProgress} from '@react-three/drei'


var gif="model1"

export default function Models_view() {
  const [model, setModel] = useState(0);
  const {progress} = useProgress();
  const [loading, setLoading] = useState(true);

  const setmodel = (page) =>{
    if( page === "1"){
      setModel(model => 1);
      gif="model1_1"
    }
    else if( page === "2"){
      setModel(model => 2);
      gif="model1_2"
      }
    else{
        setModel(model => 3);
        gif="model1"  }
  };

  useEffect (() => {
    if (progress > 99){
      setTimeout(setLoading(false), 2000);
    }
  }, [progress]);

  return (<>
    {loading &&
    <div className="overlay">
      <div className='main_heading1 overlay-text '>Loading...{Math.round(progress)}%</div>
    </div>
  }
   <div className='d-flex justify-content-between mx-5 py-3 sticky-top'>

<div > <h1  className='main_heading'>Cryptoclub</h1></div>  <div > <h1 className='main_heading'></h1></div>

<div>

<div  className='d-flex align-items-center'><Link to="/"><button type="button" class="btn btn-block footer_button glow-button btn-outline-light  _360_button_styling " >back</button> </Link>
<Link to="/menu"><img  type="button"  src={Image4} width="80" class="img-fluid" alt="Responsive image" ></img></Link></div>

</div>

</div>

    <div className='d-flex justify-content-center'>
    <div className="row sticky ">
    <div className="container mb-5  ">
    <div className='card card2' >
    <div className={gif}>
    <Canvas  camera={{ fov:10, position: [0,1,10]}}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight intensity={1} position={[0,0,100]} />
        <directionalLight intensity={1} position={[0,0,-100]} />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} animations={true} />
        {
          model===1?  <P1 /> : model===2?  <P2 />:  model===3? <P3 />:<P1 />
        }

      </Suspense>

    </Canvas>

    <center>
    <a type="button" onClick={()=> setmodel("1")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle " src={Image1} alt='' /></a>
    <a type="button"  onClick={()=> setmodel("2")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image2} alt='' /></a>
    <a type="button"onClick={()=> setmodel("3")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image3} alt='' /></a>
    <a type="button" onClick={()=> setmodel("1")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle " src={Image1} alt='' /></a>
    <a type="button"  onClick={()=> setmodel("2")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image2} alt='' /></a>
    <a type="button"onClick={()=> setmodel("3")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image3} alt='' /></a>
    <a type="button" onClick={()=> setmodel("1")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle " src={Image1} alt='' /></a>
    <a type="button"  onClick={()=> setmodel("2")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image2} alt='' /></a>
    <a type="button"onClick={()=> setmodel("3")}> <img className="img-fluid footer_button  border border-dark border-3 imgstyle" src={Image3} alt='' /></a>
    </center>
    </div>
</div>
</div>
</div>
</div>
</>
  )
}
