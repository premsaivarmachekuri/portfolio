const About = () => {
    const renderEmojiItem = (emoji, text) => (
        <div className="flex items-center my-2">
            <span className="mr-2">{emoji}</span>
            <p>{text}</p>
        </div>
    );

    return (
        <div className="py-20 px-16 w-full bg-[#090E34]"  id="aboutSection">
            <h1 className="pt-5 text-5xl text-blue-500 text-center py-10">About Me</h1>
            <div data-aos="fade-up-right" className="flex flex-col items-center text-blue-300 order-first md:flex-row md:order-last md:flex justify-between">
                <div className="w-full md:w-[50%] space-x-0 space-y-10 text-xl">
                {renderEmojiItem("⚡", "I am a fullstack developer with strong administrative and communication skills, a meticulous attention to detail, and the ability to write efficient code using HTML, CSS, JavaScript, MERN stack, MySQL, MongoDB, Docker and Python")}
                {renderEmojiItem("⚡", "I am a passionated and interested in working and growing networks and communities.")}
                {renderEmojiItem("⚡", "I am eager to continue learning, growing, and contributing to my role. I am excited to see what the future holds and I am confident that my skills and passion for development will continue to thrive.")}
                </div>

               <img src="./src/assets/animation_lnud3ndz_medium.gif" data-aos="fade-up-left" className="m-auto order-last md:order-first w-[350px]  w-max-sm rounded-full my-4" alt="Developer" />
            </div>
            
        </div>
    );
}

export default About;
