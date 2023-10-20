import emoji from "react-easy-emoji";
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = {
  waveEmoji: {
    animationDuration: "1.8s",
    animationIterationCount: "infinite",
    animationName: "wave",
    display: "inline-block",
    transformOrigin: "70% 70%",
  },
};

const keyframes = {
  wave: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "10%": {
      transform: "rotate(-10deg)",
    },
    "20%": {
      transform: "rotate(12deg)",
    },
    "30%": {
      transform: "rotate(-10deg)",
    },
    "40%": {
      transform: "rotate(9deg)",
    },
    "50%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(0deg)",
    },
  },
};

const Header = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="h-screen bg-[#090E34]" id="homeSection">
      <div className="h-full flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto p-6 relative top-[-10%]">
        <div className="w-full my-auto px-5 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-mono text-center pb-2">
            Hello, I am Premsai Varma{" "}
            <span style={styles.waveEmoji}>{emoji("👋")}</span>
          </h1>
          <p className="text-center text-lg text-gray-300">
            I am a passionate full-stack developer who is strong in technical skills and interested in working and growing networks and communities.
          </p>
          <button className=" shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-blue-100 my-5 bg-blue-800 text-base px-6 py-2 rounded-2xl text-justify mx-auto md:text-left">
  Resume
</button>

        </div>
        <div className="w-full m-auto text-center my-" data-aos="fade-left">
          <img src="./src/assets/profile.jpeg" alt="Profile" className="border-0 shadow-green-500 relative rounded-2xl shadow-2xl drop-shadow-2xl p-4 w-[450px] m-auto" />
        </div>
      </div>
      </div>
      <div className="relative text-center bottom-[20%] self-end justify-self-center cursor-pointer">
      <a href="#aboutSection"><i class="fa-solid fa-angle-down text-gray-200 text-[70px] animate-bounce"></i></a>
    </div>

    </div>
  );
};

export default Header;
