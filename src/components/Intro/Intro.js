import React from 'react';
import To from '../../assets/videos/To.mp4';
const Intro = () => {
  const autoPlay = (window.onload = function () {
    document.getElementById('vid').play();
  });
  window.addEventListener('contextmenu', (e)=>(
    e.preventDefault()
  ))
  return (
    <>
      <video
        onScroll={autoPlay}
        muted="true"
        loop
        typeof="video/mp4"
        src={To}
        id="vid"
        className="md:w-[60%] w-[100%] outline-none bg-current"
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback nomutebutton"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </>
  );
};

export default Intro;
