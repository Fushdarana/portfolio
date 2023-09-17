import React from 'react'
import {motion} from 'framer-motion'
import {SectionWrapper} from "../hoc/index.js";

import {styles} from '../styles'
import {fadeIn, textVariant} from "../utils/motion.js";

const About = () => {
    return (
        < >
            <motion.div
                className='text-center'
                variants={textVariant()}>
                <p className={styles.sectionSubText}>Обо мне</p>
                <h2 className={styles.sectionHeadText}>Образование и карьера</h2>
            </motion.div>

            <motion.p
                className='mt-4 text-secondary text-[17px] text-center leading-[30px] text-center'
                variants={fadeIn('', '', 0.1, 1)}>
                Закончила Новосибирский Государственный Технический Универститет по&nbsp;направлению переводчик
                технического английского. Долгое время работала писателем научных статей для
                зарубежных вузов. После обучения на программиста&nbsp;работала там же в качестве junior-frontend разработчика.
                Хочу попробовать себя в&nbsp;более крупном проекте, поэтому ищу возможности сотрудничества. Более
                уверенно себя чувствую при работе с Vue/Vuex/Nuxt,&nbsp;но свое обучение начинала с React/Redux/Next,
                &nbsp;так что c данными технологиями также знакома.
            </motion.p>
        </>

    )
}

export default SectionWrapper(About, 'about')