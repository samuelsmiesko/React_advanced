import React from 'react';
import Hexagon from './Logos/hexagon.png'
import { motion } from "framer-motion"

const El1 = () => {



    return (
        <motion.div  animate={{ x: [500, 1300, 300, 300 ,1500, 500], y: [500, 1200, 500, 1800,2000, 500]}}
                    transition={{ duration: 15, repeat: Infinity }}
        >
            <img style={{height: '10em', position:'absolute', top: '50%',right:'50%'}} src={Hexagon} alt="Hexagon" />
        </motion.div>
    );
}

export default El1;
