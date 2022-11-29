import React from 'react';

// import { Container } from './styles';

function Mapgoogle() {
  return (
    <div id="map-container-google-1" className="z-depth-1-half map-container" >
        <iframe title="mapgoogle" src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{width: "100%", height: "500px"}}
             allowfullscreen></iframe>
    </div>
  )
}

export default Mapgoogle;