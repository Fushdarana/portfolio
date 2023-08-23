import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    notes,
    todo,
    gallery,
    nextJS,
    scss,
    vue,
    vuex,
    nuxt,
    photo
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
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
                name: "vue",
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
];

export { technologies, projects, photos };
