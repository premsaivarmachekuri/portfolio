import SkillComp from "../components/SkillComp"

const Frameworks = [
    {
        name: 'React',
        url: './public/assets/skills/frameworks/react.svg'
    },
    {
        name: 'Express js',
        url: './public/assets/skills/frameworks/express.svg'
    },
    {
        name: 'Node js',
        url: './public/assets/skills/frameworks/node-js.svg'
    },
    {
        name: 'Mongo DB',
        url: './public/assets/skills/frameworks/mongodb.svg'
    },
    {
        name: 'Tailwind CSS',
        url: './public/assets/skills/frameworks/tailwindcss-icon.svg'
    },
    {
        name: 'Bootstrap',
        url: './public/assets/skills/frameworks/bootstrap.svg'
    },
    {
        name: 'My SQL',
        url: './public/assets/skills/frameworks/mysql.svg'
    },
    {
        name: 'Numpy',
        url: './public/assets/skills/frameworks/numpy.svg'
    }

]

const Languages = [
    {
        name: 'C',
        url: './public/assets/skills/languages/c.png'
    },
    {
        name: 'Python',
        url: './public/assets/skills/languages/python.svg'
    },
    {
        name: 'C++',
        url: './public/assets/skills/languages/c++.png'
    },
    {
        name: 'HTML',
        url: './public/assets/skills/languages/html.png'
    },
    {
        name: 'CSS',
        url: './public/assets/skills/languages/css.svg'
    },
    {
        name: 'JavaScript',
        url: './public/assets/skills/languages/js.png'
    },
    {
        name: 'Bash',
        url: './public/assets/skills/languages/bash.svg'
    },
    {
        name: 'Java',
        url: './public/assets/skills/languages/java.svg'
    }

]

const Tools = [
    {
        name: 'git',
        url: './public/assets/skills/tools/git.png'
    },
    {
        name: 'Github',
        url: './public/assets/skills/tools/git.png'
    },
    {
        name: 'Figma',
        url: './public/assets/skills/tools/figma.svg'
    },
    {
        name: 'Canva',
        url: './public/assets/skills/tools/canva.png'
    },
    {
        name: 'ChatGPT',
        url: './public/assets/skills/tools/chatgpt.png'
    },
    {
        name: 'Google Bard',
        url: './public/assets/skills/tools/bard.png'
    },
    {
        name: 'Google Cloud',
        url: '/public/assets/skills/tools/cloud.png'
    },
    {
        name: 'Visual Studio',
        url: './public/assets/skills/tools/vs.png'
    },
    {
        name: 'Docker',
        url: './public/assets/skills/tools/docker.png'
    },
    {
        name: 'Postman',
        url: 'https://img.icons8.com/?size=80&id=EPbEfEa7o8CB&format=png'
    },
    {
        name: 'Materail UI',
        url: './public/assets/skills/tools/material-ui.svg'
    },
    {
        name: 'Notion',
        url: './public/assets/skills/tools/notion.png'
    }

]

const Skills = () => {

    return (
        <div className="w-full bg-[#0B113A] md:px-20  py-20 px-16" id="skillSection">
            <h1 className="pt-5 text-5xl text-blue-500 text-center py-10">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div  data-aos="fade-left">
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Languages</h2>
            <ul className="grid grid-cols-4">
            {Languages.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div  data-aos="fade-right">
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Frameworks</h2>
            <ul className="grid grid-cols-4">
            {Frameworks.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div  data-aos="fade-left">
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Tools</h2>
            <ul className="grid grid-cols-4">
            {Tools.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Skills