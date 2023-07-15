import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";

const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_ejpo33n',
            'template_4d65zik',
            {
                from_name: form.name,
                to_name: 'Victoria Slobodkina',
                from_email: form.email,
                to_email: 'nevermind0966@gmail.com',
                message: form.message
            },
            'ueblT1OROGLLZtCK1'
        )
            .then(() => {
                setLoading(false)
                alert('Спасибо за Ваш отклик. Я свяжусь с Вами в ближайшее время!')

                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
            }, (error) => {
                setLoading(false)
                console.log(error)
                alert('Что-то пошло не так...')
            })
    }

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10 overflow-hidden'>
            <motion.div
                className='flex-[0.75] bg-black-100 p-8'
                variants={slideIn('left', 'tween', 0.2, 1)}>
                <p className={styles.sectionSubText}>Сотрудничество</p>
                <h3 className={styles.sectionHeadText}>Связаться со мной</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Ваше Имя</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='Введите имя или название Вашей организации...'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Ваш Email</span>
                        <input
                            type='text'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='Введите email...'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Сопроводительное Cообщение</span>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Введите сообщение...'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 outline-none w-fit text-white sadow-md shadow-primary rounded-xl'>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

        </div>
    )
}

export default SectionWrapper(Contact, 'contact')