const About = () => {
    const renderEmojiItem = (emoji, text) => (
        <div className="flex items-center my-2">
            <span className="mr-2">{emoji}</span>
            <p>{text}</p>
        </div>
    );

    return (
        <div className="w-full py-8 px-16 bg-[#090E34]">
            <h1 className="text-2xl text-white font-medium text-center my-8">About Me</h1>
            <div className="flex flex-col items-center text-blue-300 order-first md:order-last md:flex justify-between">
                {renderEmojiItem("⚡", "Develop highly interactive Front end / User Interfaces for your web and mobile applications")}
                {renderEmojiItem("⚡", "Progressive Web Applications (PWA) in normal and SPA Stacks")}
                {renderEmojiItem("⚡", "I am eager to continue learning, growing, and contributing to my role. I am excited to see what the future holds and I am confident that my skills and passion for development will continue to thrive.")}
               <img src="./src/assets/animation_lnud3ndz_medium.gif"  className="m-auto order-last md:order-first w-[350px]  w-max-sm rounded-full my-3" alt="Developer" />
            </div>
            
        </div>
    );
}

export default About;
