import React from 'react';
import Injection from './Logos/injection.png'
import { motion } from "framer-motion"

const El3 = () => {

    return (
        <motion.div  animate={{ x: [800, 700, 800, 400 ,1200, 1000], y: [800, 400, 600, 900,1500, 800]}}
                    transition={{ duration: 25, repeat: Infinity }}
        >
            <img style={{height: '12em', position:'absolute', top: '35%',right:'70%',cursor: 'notAllowed'}} src={Injection} alt="Hexagon" />
        </motion.div>
    );
}

export default El3;
