import React from 'react';
import Pill from './Logos/pill.png'
import { motion } from "framer-motion"

const El2 = () => {

    return (
        <motion.div  animate={{ x: [1000, 500, 800, 400 ,100, 1000], y: [1000, 800, 600, 300,1500, 1000]}}
                    transition={{ duration: 45, repeat: Infinity }}
        >
            <img style={{height: '10em', position:'absolute', top: '80%',right:'20%'}} src={Pill} alt="Hexagon" />
        </motion.div>
    );
}

export default El2;
