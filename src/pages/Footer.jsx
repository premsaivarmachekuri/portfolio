import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  // Add an event listener to handle scrolling and adjust the navbar's z-index.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts.
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-gradient-to-r from-indigo-500 via-indigo-200 to-indigo-500 w-full bottom-0 z-10`}>
      <div className="bg-gradient-to-r from-indigo-500 text-white">
        <div className='flex items-center justify-between flex-wrap'>
            <div className='px-16 py-8'>
                <a href="">pchekuri@gitam.in</a>
            </div>
            <div className='m-auto justify-self-center'>
              <p className='text-xl text-center'>Made with ❤️</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="m-auto flex sm:space-x-2 md:pr-20 md:space-x-5 justify-center" >
=======
            <div className="flex sm:space-x-3 md:pr-20 md:space-x-5 md:pr-30 justify-center" >
>>>>>>> parent of db0b625 (made changes for responsiveness 2 rounded nav)
=======
            <div className="flex sm:space-x-3 md:pr-20 md:space-x-5 md:pr-30 justify-center" >
>>>>>>> parent of db0b625 (made changes for responsiveness 2 rounded nav)
          <a
            href="https://www.linkedin.com/in/premsaivarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-0"
          >
            <button className='flex self-center mr-[10px] inline-block p-3 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-blue-500 hover:b-black focus:text-accent focus:border-accent border-slate-400 2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light border-0'>
              <i className="fab fa-linkedin mr-2 fa-2x"></i>
            </button>
          </a>
          <a
            href="https://github.com/premsaivarmachekuri"
            target="_blank"
            rel="noopener noreferrer"
            className="border-0"
          >
            <button className='flex self-center mr-[10px] inline-block p-3 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-black hover:b-black focus:text-accent focus:border-accent border-slate-400 2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light border-0'>
              <i className="fab fa-github mr-2 fa-2x"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
