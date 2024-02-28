import {
    animedb,
    css,
    figma,
    gallery,
    git,
    html,
    javascript,
    nextJS,
    notes,
    nuxt,
    photo,
    pinia,
    reactjs,
    scss,
    tailwind,
    todo,
    typescript,
    vue,
    vuex,
    coolclub,
    appio,
    dankolab
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "Experience",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Vuex",
        icon: vuex,
    },
    {
        name: "Nuxt",
        icon: nuxt,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "scss",
        icon: scss,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "nextJS",
        icon: nextJS,
    },
    {
        name: "Pinia",
        icon: pinia,
    }
];

const photos =
    {
        img: photo
    }

const projects = [
    {
        name: "ToDo App",
        description:
            "Незаменимый спутник каждого начинающего JS разработчика - ToDo-шка. Приложение позволяет редактировать, удалять и дабавлять заметки с сохранением в LocalStorage.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "JS-localStorage",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/Fushdarana/todo",
    },
    {
        name: "Forget-Me-Note",
        description:
            "Приложение для заметок. Воозможность добавлять и редактировать текст, фото, видео (через WYSIWYG-редактор), а также добавлять заметки в избранное. Реализовано управление состоянием через vuex.",
        tags: [
            {
                name: "vue2",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "nuxt",
                color: "green-text-gradient",
            },
            {
                name: "vuex",
                color: "pink-text-gradient",
            }
        ],
        image: notes,
        source_code_link: "https://github.com/Fushdarana/forget-me-note",
    },
    {
        name: "3D Gallery",
        description:
            "Интерактивная галерея с 3D-прокруткой и возможностью добавлять как фото, так и видео.",
        tags: [
            {
                name: "Vanilla JS",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: gallery,
        source_code_link: "https://github.com/Fushdarana/3d-scroll",
    },
    {
        name: "Anime DB",
        description:
            "База данных по аниме на Vue 3. Взаимодействие с Jikan API.",
        tags: [
            {
                name: "vue3",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "blue-text-gradient",
            },
        ],
        image: animedb,
        source_code_link: "https://github.com/Fushdarana/animedb",
    },
];

const companies = [
    {
        name: "CoolClub",
        icon: coolclub,
        description: 'Работала с Vue2, Vuex, разрабатывала компоненты для реализации новых фичей для личного кабинета пользователя (например: добавление заказов в избранное);\n' +
            'Реализовала компоненты, требующие взаимодействия с внутреннем API компании;\n' +
            'Занималась адаптивной версткой (препроцессор scss)\n' +
            'Работала с шаблонизатором pug\n' +
            'Взаимодействовала с WebPack(лоадеры гифок)\n' +
            'Писала unit-тесты;',
        tech: 'Vue2, Vuex, Nuxt, HTML, SCSS, PUG, WebPack, Jest',
    },
    {
        name: "AppioTeam",
        icon: appio,
        description: 'Верстка адаптивных лендингов на HTML, SCSS, JS, собирали с помощью WebPack;\n' +
            'Разрабатывала рекламные приложения для мобильных устройств и десктопа с использованием Vue3, Nuxt, Pinia;\n' +
            'Занималась разработкой новых фичей во внутренней админке компании на Typescript (разграничение доступов пользователей с использованием JWT и тд.);',
        tech: 'Vue3, Pinia, Nuxt, HTML, SCSS, WebPack, Pure JS, TypeScript, Quasar',
    },
    {
        name: "DankoLab",
        icon: dankolab,
        description: 'Сборка и верстка игровых интерфейсов внутри движка Cocos Creator;\n' +
            'Разработка архитектуры игры симулятор жизни на JS/Typescript;\n' +
            'Примеры задач: реализация механики мини-игр, кор-механик и тд.;',
        tech: 'Cocos Creator, TypeScript',
    },
]

export {technologies, projects, photos, companies};
