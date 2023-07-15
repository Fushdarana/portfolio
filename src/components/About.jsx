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
                технического и&nbsp;литературного английского. Долгое время работала писателем научных статей для
                зарубежных вузов. На&nbsp;данный момент заинтересовалась веб-разработкой и&nbsp;начала самостоятельную
                учебу с&nbsp;JavaScript. На&nbsp;данный момент развиваюсь в&nbsp;области Frontend. Хочу попробовать себя
                в&nbsp;комерческой разработке,поэтому ищу возможности сотрудничества и&nbsp;работы в&nbsp;команде.
            </motion.p>
        </>

    )
}

export default SectionWrapper(About, 'about')