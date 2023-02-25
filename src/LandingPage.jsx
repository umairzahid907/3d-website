import * as THREE from 'three'
import {Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
// import {Model} from './P4'
import {Model} from './Landing'
// import { Model } from './Dancing'
import Card from './Cards'
import Description from './Description'
import Favicon from './Favicon'
import Image2  from './media/ARMY.jpeg'
import { Link } from "react-router-dom"
import './index.css'

function LandingPage() {


  function Rig({ children }) {
    const ref = useRef()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * -20, 0, 50), 0.5)
      ref.current.position.lerp(vec.set(0, 0, 0), 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, 0, 0.01)
    })
    return <group ref={ref}>{children}</group>
  }

return (

<>

<div id="set-height">
<div className='d-flex flex-column  align-items-center  height_80'>
<div className=''>
<div className='d-flex justify-content-between padding  mx-5'>

<div className='d-flex flex-column align-items-flex-start width_40 '>

<div className='height_80'><h1 className='main_heading1'>THE CLUB</h1><h1 className='main_heading1'>PENGUIN</h1></div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
<br></br>
<br></br>

<div className='d-flex align-items-baseline'>
<Link to="/about"><button type="button" className="btn btn-block footer_button glow-button btn-outline-light  white_button_styling">Buy Now</button></Link>
<button type="button" className="btn btn-block footer_button glow-button btn-outline-light  white_button_styling">play</button>
</div>

</div>

<div className='d-flex width_50' >
<div className="wrapper1">
          <div className='model'>
            <Canvas  camera={{ fov:11.5, position: [0,-10,0]}}>
              <Suspense fallback={null}>
                <ambientLight />
                <directionalLight intensity={2} position={[0,0,50]} />
                <Rig>
                  <Model />
                </Rig>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} animations={false} rotateSpeed={0.5}  />
              </Suspense>

            </Canvas>

          </div>
        </div>
 </div>

</div>
</div>


{/* <div  className='padding height_120'>
<Video />
 </div> */}

{/* <div  className='padding height_120'>
 <ModelsView1 />
 </div> */}



<div  className='padding height_120'>
<div  className='padding height_120'></div>
 <Card/>

</div>


<div  className='height_120'>
<div  className='height_120'>
   <Description />
</div>
</div>

<div  className='padding height_120'></div>
<div  className='padding height_120'>
 <Favicon />
</div>


<div  className='height_80'>
</div>

</div>
   <img src={Image2} width="2200" height="300" class="img-fluid" alt="Responsive image"></img>
</div>

</>

  );
}

export default LandingPage;
