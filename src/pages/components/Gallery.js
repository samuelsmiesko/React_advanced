import {Carousel}  from 'react-bootstrap';

import React from 'react';
import image1 from './album/image1.jpg';
import image2 from './album/image2.jpg';
import image3 from './album/image3.jpg'

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          
          style={{display: 'flex', margin: 'auto',maxHeight:'80vh'}}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          style={{display: 'flex', margin: 'auto',maxHeight:'80vh'}}
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          style={{display: 'flex', margin: 'auto',maxHeight:'80vh'}}
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;