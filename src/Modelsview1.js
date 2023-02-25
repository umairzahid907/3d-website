import {Suspense, useState} from 'react'
import {Canvas } from '@react-three/fiber'
import Image4  from './media/6.png';
import {OrbitControls} from '@react-three/drei'
import { Model as P2} from './P2'
import { Model as P3} from './P3'
import { Model as P1} from './P1'
import './index.css';

var gif="model2"

export default function ModelsView1() {
  const [model, setModel] = useState(0);
  const setmodel = (page) =>{
    if( page === "1"){
      setModel(model => 1);
      gif="model2_1"
    }
    else if( page === "2"){
      setModel(model => 2);
      gif="model2_2"
    }
    else{
        setModel(model => 3);
        gif="model2"
      }
  };


  return (
    <div className='d-flex justify-content-center'>


    <div className='card2' >
    <div className={gif}>
    <Canvas  camera={{ fov:10, position: [0,1,10]}}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight intensity={1} position={[0,0,100]} />
        <directionalLight intensity={1} position={[0,0,-100]} />

        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} animations={true} minPolarAngle={Math.PI/2}
  maxPolarAngle={Math.PI/2}/>
        {
          model===1?  <P1 /> : model===2?  <P2 />:  model===3? <P3 />:<P1/>
        }

      </Suspense>

    </Canvas>
    <div  className="height_50"></div>
    <center>
    <a type="button" onClick={()=> setmodel("1")}> <img className="img-fluid footer_button border border-dark border-3 imgstyle " src={Image4} alt='' /></a>
    <a type="button"  onClick={()=> setmodel("2")}> <img className="img-fluid footer_button border border-dark border-3 imgstyle" src={Image4} alt='' /></a>
    <a type="button"onClick={()=> setmodel("3")}> <img className="img-fluid footer_button border border-dark border-3 imgstyle" src={Image4} alt='' /></a>
    </center>
    </div>

</div>
</div>
  )
}
