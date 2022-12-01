import React from 'react';
import Pill from './Logos/pill.png'
import { motion } from "framer-motion"

const El2 = () => {

    return (
        <motion.div  animate={{ x: [500, 200, 800, 400 ,100, 500], y: [500, 800, 600, 300,1500, 500]}}
                    transition={{ duration: 45, repeat: Infinity }}
        >
            <img style={{height: '10vw', position:'fixed', top: '80%',right:'40%',overflow: 'hidden'}} src={Pill} alt="Hexagon" />
        </motion.div>
    );
}

export default El2;
