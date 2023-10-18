import SkillComp from "../components/SkillComp"

const Frameworks = [
    {
        name: 'React',
        url: 'https://www.svgrepo.com/show/452092/react.svg'
    },
    {
        name: 'Express js',
        url: 'https://www.svgrepo.com/show/330398/express.svg'
    },
    {
        name: 'Node js',
        url: 'https://www.svgrepo.com/show/452075/node-js.svg'
    },
    {
        name: 'Mongo DB',
        url: 'https://www.svgrepo.com/show/331488/mongodb.svg'
    },
    {
        name: 'Tailwind CSS',
        url: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg'
    },
    {
        name: 'Bootstrap',
        url: 'https://www.svgrepo.com/show/353498/bootstrap.svg'
    },
    {
        name: 'My SQL',
        url: 'https://www.svgrepo.com/show/373848/mysql.svg'
    },
    {
        name: 'Numpy',
        url: 'https://www.svgrepo.com/show/373938/numpy.svg'
    }

]

const Languages = [
    {
        name: 'C',
        url: 'https://img.icons8.com/?size=256&id=40670&format=png'
    },
    {
        name: 'Python',
        url: 'https://www.svgrepo.com/show/452091/python.svg'
    },
    {
        name: 'C++',
        url: 'https://img.icons8.com/?size=256&id=40669&format=png'
    },
    {
        name: 'HTML',
        url: 'https://img.icons8.com/?size=256&id=20909&format=png'
    },
    {
        name: 'CSS',
        url: 'https://www.svgrepo.com/show/452185/css-3.svg'
    },
    {
        name: 'JavaScript',
        url: 'https://img.icons8.com/?size=256&id=108784&format=png'
    },
    {
        name: 'Bash',
        url: 'https://www.svgrepo.com/show/353478/bash-icon.svg'
    },
    {
        name: 'Java',
        url: 'https://www.svgrepo.com/show/452234/java.svg'
    }

]

const Tools = [
    {
        name: 'git',
        url: 'https://img.icons8.com/?size=48&id=20906&format=png'
    },
    {
        name: 'Github',
        url: 'https://www.svgrepo.com/show/512317/github-142.svg'
    },
    {
        name: 'Figma',
        url: 'https://www.svgrepo.com/show/448222/figma.svg'
    },
    {
        name: 'Canva',
        url: 'https://img.icons8.com/?size=48&id=iWw83PVcBpLw&format=png'
    },
    {
        name: 'ChatGPT',
        url: 'https://img.icons8.com/?size=64&id=TlnNBAQWZ6Vv&format=png'
    },
    {
        name: 'Google Bard',
        url: 'https://img.icons8.com/?size=48&id=17949&format=png'
    },
    {
        name: 'Google Cloud',
        url: 'https://img.icons8.com/?size=48&id=WHRLQdbEXQ16&format=png'
    },
    {
        name: 'Visual Studio',
        url: 'https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png'
    },
    {
        name: 'Docker',
        url: 'https://img.icons8.com/?size=48&id=22813&format=png'
    },
    {
        name: 'Postman',
        url: 'https://img.icons8.com/?size=80&id=EPbEfEa7o8CB&format=png'
    },
    {
        name: 'Materail UI',
        url: 'https://www.svgrepo.com/show/354048/material-ui.svg'
    },
    {
        name: 'Notion',
        url: 'https://img.icons8.com/?size=50&id=nvtEH6DpqruC&format=png'
    }

]

const Skills = () => {

    return (
        <div className="h-full bg-[#0B113A] md:px-20">
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