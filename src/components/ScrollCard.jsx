import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Hash = (props) => {
  const { det } = props;
  return (
    <li className='bg-green-200 py-1 px-2 m-2 text-[10px] rounded-2xl'>
      {'#' + det}
    </li>
  );
};

const SlideCard = (props) => {
  const { details } = props;
  const { img, name, tags, link } = details;
  return (
    <SplideSlide className='w-[300px] m-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105'>
      <div className='relative'>
        <img src={img} className='w-full h-[200px] rounded-lg' alt={name} />

      </div>
      <div className='p-4'>
        <h1 className='text-white text-lg mt-2 text-center'>{name}</h1>
        <ul className='flex flex-wrap text-center justify-center'>
      {tags.map((tag, index) => (
        <Hash key={index} det={tag} />
      ))}
      </ul>
      <a
          className='block w-full my-3 px-6 py-1 text-center bg-blue-500 text-blue-200 rounded-md hover:bg-blue-600 hover:text-blue-100 transition duration-300'
          href={link}
          target='_blank'
        >
          Read More
        </a>
      </div>
    </SplideSlide>
  );
};

export default SlideCard;
