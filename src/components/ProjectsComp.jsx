const ProjectComp = (props) => {
    const {details} = props
    const {url, desc, heading, techstack, link} = details 
    console.log(url)


    return (
        <div  data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="overflow-hidden text-center space-y-2 my-10 m-auto min-w-[250px] max-w-[300px] w-[100%] rounded-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <img src={url} className="w-[100%] text-center h-60  rounded-md hover:scale-95 transition-all duration-500 cursor-pointer" />
            <h1 className="text-blue-400 text-2xl">{heading}</h1>
            <p className="text-gray-300">{desc}</p>
            <a href={link} target="_blank" className="my-5"><button className="rounded-md w-full mt-4 text-white bg-blue-500 py-2 px-5">Live Demo</button></a>

        </div>
    )
}

export default ProjectComp
