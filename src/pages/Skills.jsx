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

const Skills = () => {

    return (
        <div className="h-[50vh] bg-[#0B113A] ">
            <h1 className="text-5xl text-center py-3">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div>
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Frameworks</h2>
            <ul className="grid grid-cols-4">
            {Languages.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div>
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Frameworks</h2>
            <ul className="grid grid-cols-4">
            {Languages.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            <div>
            <h2 className="px-10 text-2xl text-red-300  from-red-600 via-green-600 via-yellow-500 to-blue-600">Frameworks</h2>
            <ul className="grid grid-cols-4">
            {Languages.map(lang => <SkillComp details={lang} />)}
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Skills