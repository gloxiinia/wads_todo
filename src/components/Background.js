import React from 'react';
import logo from 'joker-phone.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Background() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Background;