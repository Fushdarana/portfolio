import {motion} from 'framer-motion'
import {SectionWrapper} from "../hoc/index.js";

import {styles} from '../styles'
import {textVariant} from "../utils/motion.js";
import {companies} from "../constants/index.js";

const About = () => {
    return (
        < >
            <motion.div className='text-center mt-8' variants={textVariant()}>
                <h2 className={`${styles.sectionSubText}`}>
                    1 год
                </h2>
                <h2 className={`${styles.sectionHeadText}`}>
                    Опыт работы
                </h2>

                <motion.div
                    className='flex flex-col flex-wrap justify-center gap-6 mt-6'
                    variants={textVariant()}>

                    {companies.map((technology) => (
                        <div key={technology.name} className='flex flex-row justify-items-start gap-10'>
                            <img className='w-24 h-24 hover:animate-ping cursor-pointer' src={technology.icon}
                                 alt={technology.name}/>
                            <div className='flex flex-col justify-items-start gap-7 text-start'>
                                <div className={`text-start ${styles.sectionSubText}`}>{technology.name}</div>
                                <div>{technology.description}</div>
                                <div className='green-text-gradient'>{technology.tech}</div>
                            </div>
                        </div>))}
                </motion.div>
            </motion.div>
        </>
    )
}

export default SectionWrapper(About, 'about')