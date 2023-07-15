import React from 'react'
import {styles} from "../styles.js"
import {SectionWrapper} from "../hoc/index.js"
import {motion} from "framer-motion"
import {textVariant} from "../utils/motion.js";

const Hero = () => {
    return (
        <section>
            <motion.div
                variants={textVariant()}
                className={`bg-gray-900 mt-32 max-h-xs max-w-2xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 rounded-3xl`}>
                <h1 className={`${styles.heroHeadText} text-white text-center`}>
                    Привет, я&nbsp;<span className='text-[#915EFF]'>Вика</span>
                </h1>
                <p className={`${styles.heroSubText} text-center mt-2 text-white-100`}>
                    начинающий <br className='sm:block hidden text-center'/>
                    Frontend разработчик
                </p>
                    <img className='rounded-full max-h-64 mt-5 mb-20' src='/public/photo.jpg' alt='photo'/>
            </motion.div>
        </section>
    )
}

export default SectionWrapper(Hero, '/')