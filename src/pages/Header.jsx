import emoji from "react-easy-emoji";

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
  return (
    <div className="h-[70vh] bg-[#090E34] border-red-400">
      <h1 className="text-white text-5xl font-mono text-center pt-5 relative bottom-0">
        Hello, I am Premsai Varma{" "}
        <span style={styles.waveEmoji}>
          {emoji("👋")}
        </span>
      </h1>
      <p className="text-center text-base-100 text-gray-300">
        I am a passionate full-stack developer who is strong in technical skills and
        interested in working and growing networks and communities.
      </p>
    </div>
  );
};

export default Header;
