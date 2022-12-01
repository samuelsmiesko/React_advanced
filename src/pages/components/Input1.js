import React from 'react'
import './Input.scss'
import magnifier from './logo.png'; 

export default function Input1() {
  return (
    <span> 
            <input  className="Inp1" type="text" id="fname" name="firstname" placeholder="Search"></input>
            <img  className="image" src={magnifier} alt="Logo" />
    </span>
  )
}
