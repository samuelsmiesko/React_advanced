import React, {useState, useEffect} from 'react';
import './Home.scss'
import Button1 from './components/Button1';
import Input1 from './components/Input1';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {

    const [isHover, setIsHover] = useState(false);
    const myStyle = {
        display: isHover ? 'none' : 'grid',
        transition: 'display 2s',
    };

    const myStyle2 = {
      display: isHover ? 'grid' : 'none',
      
    };

    
    const control = useAnimation()
    const [ref, inView] = useInView()

    const isTrue = () => {      
      setIsHover(true); 
      
    };

    const isFalse = () => {      
      setIsHover(false); 
      
    };

    const handleScroll = event => {
 
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
        // console.log(window.innerHeight)
          if(event.currentTarget.offsetHeight+event.currentTarget.scrollTop>window.innerHeight){
            console.log("run")
            isTrue();
          }else if(event.currentTarget.scrollTop<210){
            isFalse();
          }else if(event.currentTarget.scrollTop>600){
            isTrue();  
          }
      };

    const boxVariant = {
        visible: {  opacity: 1, transition: { duration: 0.5 } },
        hidden: {  opacity: 0 }
      };

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);

return (
        <div className='Home' onScroll={handleScroll}>
            <p style={{fontSize: '2.0em', paddingLeft: '30vw'}}>Home</p>
            <p style={{fontSize: '1.5em', paddingLeft: '30vw'}}>This is page where I show my CSS elements with animations.</p>
            <div  
                
                className="DIV1"
                style={myStyle}
                >
                
                <Input1/>
            </div>
            <motion.div 
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className="DIV2"
                style={myStyle2}
                >
                <Button1/>
            </motion.div>
                
            
            
        </div>
    )
    
  };
  
  export default Home;