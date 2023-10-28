const ProjectsList = [
    {
        url: './assets/projects/1.png',
        heading: 'Appointment Application',
        desc: 'An appointment scheduling app that lets users set appointments, dates, and reminders, built with React and styled using Tailwind CSS.',
        techstack: ['React.js', 'Tailwind CSS'],
        link: 'https://reactjsdev24.ccbp.tech/'
    },
    {
        url: './assets/projects/2.png',
        heading: 'Emoji Game',
        desc: 'A fun game featuring 12 emojis to test your memory and speed. Rearrange them as they shuffle with React and a sleek UI in Tailwind CSS.',
        techstack: ['React.js', 'Tailwind CSS'],
        link: 'https://reactjsdev25.ccbp.tech/'
    },
    {
        url: './assets/projects/3.jpg',
        heading: 'Wikipedia Search',
        desc: 'A fully functional Wikipedia search webpage built using React and Node.js, allowing users to search for information on Wikipedia.',
        techstack: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
        link: 'https://newwikipedia1.ccbp.tech/'
    },
    {
        url: './assets/projects/4.png',
        heading: 'Todo List',
        desc: 'A simple to-do list application for managing daily tasks, created with HTML, JavaScript, and a clean UI using Tailwind CSS.',
        techstack: ['HTML', 'JavaScript', 'Tailwind CSS'],
        link: 'https://to9.ccbp.tech/'
    },
    {
        url: './assets/projects/5.png',
        heading: 'Dev Blog',
        desc: "A developer's blog webpage displaying a list of blogs with the ability to view detailed descriptions upon clicking.",
        techstack: ['React.js', 'Tailwind CSS'],
        link: 'https://reactjsdev22.ccbp.tech/blogs/1'
    },
    {
        url: './assets/projects/6.png',
        heading: 'Typing Test Game',
        desc: 'A typing test game challenging users to type a random text as quickly as possible, built using React and styled with Tailwind CSS.',
        techstack: ['React.js', 'Tailwind CSS'],
        link: 'https://tt2004.ccbp.tech/'
    },
    {
        url: './assets/projects/7.png',
        heading: 'Destiny Search',
        desc: 'Explore top travel destinations with a stylish webpage created using React and custom CSS.',
        techstack: ['React.js', 'CSS'],
        link: 'https://reactjsdev9.ccbp.tech/'
    },
    {
        url: './assets/projects/8.png',
        heading: 'Food Munch Page',
        desc: 'A responsive food retail shop page with a mouth-watering display, built using HTML, CSS, and Bootstrap.',
        techstack: ['HTML', 'CSS', 'Bootstrap'],
        link: 'https://fm9.ccbp.tech/'
    },
    {
        url: './assets/projects/9.png',
        heading: 'Google Career Page',
        desc: 'A responsive clone of Google\'s career page showcasing job opportunities, designed using HTML, CSS, and Bootstrap.',
        techstack: ['HTML', 'CSS', 'Bootstrap'],
        link: 'https://gccbyvarma.ccbp.tech/'
    },
    {
        url: './assets/projects/10.jpg',
        heading: 'Guessing Game',
        desc: 'A number guessing game challenging users to guess a number between 1 and 100 with clues and minimal attempts, built with React and styled using Tailwind CSS.',
        techstack: ['React.js', 'Tailwind CSS'],
        link: 'https://gtn2.ccbp.tech/'
    },
];



import ProjectComp from "../components/ProjectsComp";
const Projects = () => {


    return (
        <div className="bg-[#090E34] py-20 px-16 w-full" id="projectSection">
            <h1 className="pt-5 text-5xl text-blue-500 text-center py-5">Projects</h1>
            <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {ProjectsList.map(pro => <ProjectComp details={pro} />)}
            </div>
            
        </div>
    )
}

export default Projects