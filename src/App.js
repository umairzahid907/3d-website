import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import APP from "./main"
import ModelsView from './ModelsView.js'
import Menu from './menu';
import MyVideo from './media/landing.mp4'
import About from './about'
import {useProgress} from '@react-three/drei'


export default function App() {

  const {progress} = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    if (progress > 99){
      setTimeout(setLoading(false), 2000);
    }
  }, [progress]);

  useEffect(() => {
    var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 1000,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element
    vid = document.getElementById('v0');

    // dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    function scrollPlay(){
      var frameNumber  = window.pageYOffset/playbackConst;
      vid.currentTime  = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
    scrollPlay();

  }, []);


  return (
  <>
  {loading &&
    <div className="overlay">
      <div className='main_heading1 overlay-text '>Loading...{Math.round(progress)}%</div>
    </div>
  }
    <div id="set-height">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<APP />} />
      <Route path="/360-view" element={<ModelsView />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <video id="v0" preload="preload">
        <source  src={MyVideo}></source>
  </video>

  </div>


  </>
  );
}
