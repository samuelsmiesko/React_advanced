import { Outlet, Link } from "react-router-dom";
import "./Layout.scss"
import { SocialIcon } from 'react-social-icons';
import React, {useState} from 'react';
import logo from './logoicon.png'; 
import Home from './home.png';
import Pen from './pen.png';
import Gallery from './gallery.png';
import Menu from './menu.png';
import Mapgoogle from "./components/Mapgoogle";
import El1 from './components/El1'
import El2 from './components/El2'
import El3 from './components/El3'

const Layout = () => {

  const [isHover, setIsHover] = useState(true);
    const myStyle = {
        display: isHover ? 'grid' : 'none',
    };

    const myStyle2 = {
      display: isHover ? 'none' : 'grid',
  };
  
  const handleMouseEnter = () => {   
    if(window.innerWidth<1000){
      setIsHover(current => !current); 
    }   
         
  };

  const isFalse = () => {      
    setIsHover(false);    
  };

  const isTrue = () => {      
    setIsHover(true);    
  };

  React.useState(() => {
    function handleResize() {
      if(window.innerWidth<1000){
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        console.log(isHover)
        isFalse()
        }else{
          console.log(isHover)
          isTrue()
        }
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div style={myStyle2} className="SmallNav">
        <h3 onClick={handleMouseEnter}><img style={{height: '100px', paddingTop:'30px',  paddingLeft:'auto', paddingRight:'auto'}} src={Menu} alt="Home" /></h3>
      </div>
      <div >
        <nav style={myStyle} className="BigNav">
          <div className="LogoOfCompany" style={{paddingBottom: '1.0em', borderBottom: "5px solid whitesmoke"}}>
            <img  className="image" src={logo} alt="Logo" />
            
          </div>
          <ul>
            <li>
              <Link onClick={handleMouseEnter} to="/"><img style={{height: '1.0em', paddingLeft:'0.5em', paddingRight:'0.5em'}} src={Home} alt="Home" />Home</Link>
            </li>
            <li>
              <Link onClick={handleMouseEnter} to="/blogs"><img style={{height: '1.0em', paddingLeft:'0.5em', paddingRight:'0.5em'}} src={Pen} alt="Home" />Blogs</Link>
            </li>
            <li style={{borderBottom: "5px solid whitesmoke"}}>
              <Link onClick={handleMouseEnter} to="/Gallery"><img style={{height: '1.0em', paddingLeft:'0.5em', paddingRight:'0.5em'}} src={Gallery} alt="Home" />Gallery</Link>
            </li>
          </ul>
          <div className="Social" style={{borderBottom: "5px solid whitesmoke", paddingBottom: "1em"}}>
            <h2 style={{fontSize: '1.7em', fontWeight: 100}}>Fallow us</h2>
            <span><SocialIcon url="https://twitter.com/" style={{ height: 100, width: 100, margin: 15}}/></span>
            <span><SocialIcon url="https://pinterest.com/" style={{ height: 100, width: 100, margin: 15 }}/></span>
            <span><SocialIcon url="https://instagram.com/" style={{ height: 100, width: 100, margin: 15 }}/></span>
            <span><SocialIcon url="https://facebook.com/" style={{ height: 100, width: 100, margin: 15 }}/></span>
          </div>
          <div style={{ paddingBottom: "1em"}}>
            <h2 style={{fontSize: '1.7em', fontWeight: 100}}>Contact</h2>
            <div style={{fontSize: '1.3em', fontWeight: 100}}>
              <div style={{paddingTop: '1.0em', borderBottom: "3px solid whitesmoke"}}>Adress:
                  <ul>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>adress 1:</li>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>adress 2:</li>
                  </ul>
              </div>
              <div style={{paddingTop: '1.0em', borderBottom: "3px solid whitesmoke"}}>Phone number:
                  <ul>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>phone 1:</li>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>phone 2:</li>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>phone 3:</li>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>phone 4:</li>
                  </ul>
              </div>
              <div style={{paddingTop: '1.0em', borderBottom: "3px solid whitesmoke"}}>Email:
                  <ul>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>email 1:</li>
                      <li style={{fontSize: '1.0em', marginLeft: '1.0em'}}>email 2:</li>
                  </ul>
              </div>
              <div style={{paddingTop: '1.0em', paddingBottom: '3.5em', borderBottom: "3px solid whitesmoke"}}>Fax:</div>
            </div> 
            <div className="mapResponsive" style={{paddingTop: '1.0em', paddingBottom: '3.5em'}}>
              <h2 style={{fontSize: '1.7em', fontWeight: 100}}>Our location</h2>
              <Mapgoogle/>

            </div>
          </div>
        </nav>
      </div>
      <El1/> 
      <El2/> 
      <El3/> 
      <Outlet />
    </>
  )
};

export default Layout;