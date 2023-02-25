
// import React from 'react';
import ReactPlayer from 'react-player';

// const PopupVideo = () => {
//   return (
//     <div className='d-flex sticky-top'>
//     <ReactPlayer
//       url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//       playing
//       width="100rem"
//       height="100vh"
//       controls
//     />
//     </div>
//   );
// };

// export default PopupVideo;

import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div>
         <ReactPlayer
      url="./video.mp4"
      playing
      width="100rem"
      height="100vh"
      controls
    />
        </div>
      )}
      <button onClick={toggleModal}>Open Video</button>
    </div>
  );
};

export default Modal;