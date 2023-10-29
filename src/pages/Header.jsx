import emoji from "react-easy-emoji";
import React,{useEffect} from "react";
import TypeWriterComp from '../components/TypeWriterComp'
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
    <div className="h-screen w-full bg-[#0B113A]" id="homeSection">
      <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row mx-auto p-6 relative md:top-[-10%] w-full max-w-screen-2xl">
        <div className="rounded-full w-100 h-100 flex-grow md:w-50 my-auto px-5 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-mono text-center pb-2">
            Hello {" "}<span style={styles.waveEmoji} className="relative fixed right-0">{emoji("👋")}</span>
          </h1>
          <h1 className="flex m-auto text-white text-4xl md:text-5xl font-mono text-center"><span  className="m-auto"><TypeWriterComp /></span>{" "}
            </h1>
          <p className="text-center text-lg text-gray-300">
            Communinty is the best place where you can develop skills 
          </p>
          <button className=" shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-blue-100 my-5 bg-blue-800 text-base px-6 py-2 rounded-2xl text-justify mx-auto md:text-left">
  Resume
</button>

        </div>
        <div className="w-100 flex-grow md:w-50 m-auto text-center md:ml-5" data-aos="fade-left">
          <img src="./assets/profile.jpeg" alt="Profile" className="border-0 shadow-green-500 relative rounded-2xl shadow-2xl drop-shadow-2xl p-4 w-[450px] m-auto" />
        </div>
      </div>
      </div>

      <div className="relative text-center bottom-[20%] self-end justify-self-center cursor-pointer">
      <a href="#aboutSection"><i class="fa-solid fa-angle-down text-gray-200 text-[70px] animate-bounce"></i></a>
    </div>

        <p className="w-[400px] h-[400px]  bg-white"></p>

    </div>
  );
};

export default Header;
