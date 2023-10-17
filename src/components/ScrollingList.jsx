import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



const ScrollingList = () => {
    const options = {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
      };
  return (
    <Splide
      aria-label="My Favorite Images"
      options={ options }
    >
      <SplideSlide>
        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Image 4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="Image 5"/>
      </SplideSlide>
    </Splide>
  );
};

export default ScrollingList;
