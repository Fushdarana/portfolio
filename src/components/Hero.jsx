import React from 'react'
import {motion} from 'framer-motion'
import {styles} from "../styles.js"
import { textVariant} from "../utils/motion.js";

const Hero = () => {
    return (
        <motion.section
            variants={textVariant()}
            className={`relative w-full h-screen mx-auto`}>
            <div
                className={`bg-gray-900 rounded-3xl absolute inset-0 top-[120px] h-4/5 mt-5 max-w-3xl mx-auto ${styles.paddingX} flex flex-col items-center gap-6`}>
                    <h1 className={`${styles.heroHeadText} text-white text-center`}>
                        Привет, я <span className='text-[#915EFF]'>Вика</span>
                    </h1>
                    <p className={`${styles.heroSubText} text-center mt-2 text-white-100`}>
                        начинающий <br className='sm:block hidden text-center'/>
                        Frontend разработчик
                    </p>
                    <div >
                        <img className='rounded-full w-full max-w-sm mt-5' src='/public/photo.jpg' alt='photo'/>
                    </div>
            </div>
        </motion.section>
    )
}

export default Hero