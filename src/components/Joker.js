import React from 'react';
import dagger from '../images/dagger.png'; // Tell webpack this JS file uses this image
import joker from "../images/joker-phone.png";

function Joker() {
  // Import result is the URL of your image
  return (
  <div>
    <img src={joker} alt="Joker" style="display:none;"/>;
  </div>
  )
}
export default Joker;