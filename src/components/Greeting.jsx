import {styles} from "../styles.js"
import {SectionWrapper} from "../hoc/index.js"
import {motion} from "framer-motion"
import {textVariant} from "../utils/motion.js";
import {photos} from '../constants/index.js'

const Greeting = () => {
    return (
        <section>
            <motion.div
                variants={textVariant()}
                className={`bg-gray-900 mt-32 max-h-xs max-w-2xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 rounded-3xl`}>
                <h1 className={`${styles.heroHeadText} text-white text-center`}>
                    Привет, я&nbsp;<span className='text-[#915EFF]'>Вика</span>
                </h1>
                <p className={`${styles.heroSubText} text-center mt-2 text-white-100`}>
                    Frontend-разработчик
                </p>
                    <img className='rounded-full max-h-64 mt-5 mb-20' src={photos.img} alt='photo'/>
            </motion.div>
        </section>
    )
}

export default SectionWrapper(Greeting, '/')