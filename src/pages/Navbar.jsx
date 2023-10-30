import React, { useState, useEffect } from 'react';

const Navbar = () => {
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
    <div className={`w-full fixed z-10`}>
      <div className="w-full y-4 navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
        <div className="w-full navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-blue-700"
            >
          <ul className="menu menu-horizontal px-1 space-x-3 text-lg cursor-pointer flex flex-col space-y-3">
            <a href='#aboutSection'><li>About Me</li></a>
            <a href='#skillSection'><li>Skills</li></a>
            <a href='#projectSection'><li>Projects</li></a>
            <a href='#moreSection'><li>More</li></a>
            <a href="#contactSections"><li>Contact Me</li></a>
            <a href="https://medium.com/p/204fc2f0a087" target="_blank"><li>Blogs</li></a>
          </ul>
            </ul>
          </div>
          <div className="flex items-center my-auto">
  <a className="btn btn-ghost normal-case text-xl xs:hidden xs:invisible mr-2">PV</a>
  <a className="btn btn-ghost normal-case text-xl max-xs:hidden xs:visible xs:text-md md:text-2xl mr-2">PREMSAI VARMA</a>
</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-lg cursor-pointer">
            <a href='#aboutSection'><li>About Me</li></a>
            <a href='#skillSection'><li>Skills</li></a>
            <a href='#projectSection'><li>Projects</li></a>
            <a href='#moreSection'><li>More</li></a>
            <a href="#contactSections"><li>Contact Me</li></a>
            <a href="https://medium.com/p/204fc2f0a087" target="_blank"><li>Blogs</li></a>
          </ul>
        </div>
        <div className="navbar-end md:px-5">
          <a
            href="https://www.linkedin.com/in/premsaivarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-0"
          >
            <button className='flex self-center mr-[10px] inline-block md:px-2 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-black hover:b-black focus:text-accent focus:border-4 border-indigo-500/100 2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light sm:border-0 md:border md:border-2'>
              <i className="fab fa-linkedin mr-2 fa-2x"></i>
              <span className='my-auto text-lg hidden md:block'>Linkedin</span>
            </button>
          </a>
          <a
            href="https://github.com/premsaivarmachekuri"
            target="_blank"
            rel="noopener noreferrer"
            className="border-0"
          >
            <button className='flex self-center mr-[10px] inline-block md:px-2 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-black hover:b-black focus:text-accent focus:border-4 border-indigo-500/100 2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light sm:border-0 md:border md:border-2'>
              <i className="fab fa-github mr-2 fa-2x"></i>
              <span className='my-auto text-lg hidden md:block'>Github</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
