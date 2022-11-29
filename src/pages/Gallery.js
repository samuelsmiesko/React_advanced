import React from 'react';
import Gallery from './components/Gallery'
import "./Layout.scss"

const Contact = () => {
    

    return (
        <div className='Gallery' >
            <p style={{fontSize: '2.0em', float:'right', paddingRight:'1em'}}>Gallery</p>
            <Gallery />
        </div>
    )
    
  };
  
  export default Contact;