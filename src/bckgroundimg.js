import React from 'react';
import App from "./App.js"
import beehive from './bluebeehivepic.jpeg'

function backgroundImage() {
  return (
    <div  styles={{ backgroundImage:`url(${beehive})` }}>
      
    </div>
  );
}

export default backgroundImage;