import SkillComp from "../components/SkillComp"

const Frameworks = [
    {
        name: 'React',
        url: './assets/skills/frameworks/react.svg'
    },
    {
        name: 'Express js',
        url: './assets/skills/frameworks/express.svg'
    },
    {
        name: 'Node js',
        url: './assets/skills/frameworks/node-js.svg'
    },
    {
        name: 'Mongo DB',
        url: './assets/skills/frameworks/mongodb.svg'
    },
    {
        name: 'Tailwind CSS',
        url: './assets/skills/frameworks/tailwindcss-icon.svg'
    },
    {
        name: 'Bootstrap',
        url: './assets/skills/frameworks/bootstrap.svg'
    },
    {
        name: 'My SQL',
        url: './assets/skills/frameworks/mysql.svg'
    },
    {
        name: 'Numpy',
        url: './assets/skills/frameworks/numpy.svg'
    }

]

const Languages = [
    {
        name: 'C',
        url: './assets/skills/languages/c.png'
    },
    {
        name: 'Python',
        url: './assets/skills/languages/python.svg'
    },
    {
        name: 'C++',
        url: './assets/skills/languages/c++.png'
    },
    {
        name: 'HTML',
        url: './assets/skills/languages/html.png'
    },
    {
        name: 'CSS',
        url: './assets/skills/languages/css.svg'
    },
    {
        name: 'JavaScript',
        url: './assets/skills/languages/js.png'
    },
    {
        name: 'Bash',
        url: './assets/skills/languages/bash.svg'
    },
    {
        name: 'Java',
        url: './assets/skills/languages/java.svg'
    }

]

const Tools = [
    {
        name: 'git',
        url: './assets/skills/tools/git.png'
    },
    {
        name: 'Github',
        url: './assets/skills/tools/git.png'
    },
    {
        name: 'Figma',
        url: './assets/skills/tools/figma.svg'
    },
    {
        name: 'Canva',
        url: './assets/skills/tools/canva.png'
    },
    {
        name: 'ChatGPT',
        url: './assets/skills/tools/chatgpt.png'
    },
    {
        name: 'Google Bard',
        url: './assets/skills/tools/bard.png'
    },
    {
        name: 'Google Cloud',
        url: '/assets/skills/tools/cloud.png'
    },
    {
        name: 'Visual Studio',
        url: './assets/skills/tools/vs.png'
    },
    {
        name: 'Docker',
        url: './assets/skills/tools/docker.png'
    },
    {
        name: 'Postman',
        url: 'https://img.icons8.com/?size=80&id=EPbEfEa7o8CB&format=png'
    },
    {
        name: 'Materail UI',
        url: './assets/skills/tools/material-ui.svg'
    },
    {
        name: 'Notion',
        url: './assets/skills/tools/notion.png'
    }

]

const Skills = () => {

    return (
        <div className="w-full bg-[#0B113A] md:px-20  py-20 px:4 sm:px-16" id="skillSection">
            <h1 className="pt-5 text-5xl text-blue-500 text-center py-10">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-10">
            <div  data-aos="fade-left">
            <h2 className="px-6 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Languages</h2>
            <ul className="grid grid-cols-4">
            {Languages.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div  data-aos="fade-right">
            <h2 className="px-6 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Frameworks</h2>
            <ul className="grid grid-cols-4">
            {Frameworks.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div  data-aos="fade-left">
            <h2 className="px-6 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Tools</h2>
            <ul className="grid grid-cols-4">
            {Tools.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Skills