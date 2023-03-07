import React from 'react';
import dagger from '../images/dagger.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function showDagger() {
  // Import result is the URL of your image
  return <img src={dagger} alt="Dagger" style="display:none;"/>;
}

export default Background;