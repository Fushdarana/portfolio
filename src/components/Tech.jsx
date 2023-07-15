import React from 'react'
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc/index.js";
import {technologies} from "../constants/index.js";

const Tech = () => {
    return (
        <>
            <motion.div className='text-center' variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>
                    Навыки
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Стек
                </h2>

                <div className='flex flex-row flex-wrap justify-center gap-6'>
                {technologies.map((technology) => (
                    <div key={technology.name} className='w-24 h-24 hover:animate-bounce  cursor-pointer'>
                        <img src={technology.icon} alt={technology.name}/>
                    </div>))}
            </div>
            </motion.div>


        </>
    )
}

export default SectionWrapper(Tech, '')