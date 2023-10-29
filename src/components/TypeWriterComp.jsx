import { TypeAnimation } from "react-type-animation";
// https://react-type-animation.netlify.app/examples
const TypeWriterComp = () => {

    return(
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I am Premsai Varma',
    1500,
    'I am Fullstack Developer',
    1500,
    'I am Frontend Designer',
    1000,
    'I am Backend Expert',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2rem' }}
  repeat={Infinity}
/>
    )
}

export default TypeWriterComp