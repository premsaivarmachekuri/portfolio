const Navbar = () => {
    return (
        <div className="w-full md:fixed top-0 z-10">
                  <div className="navbar bg-base-100 bg-blue-800 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">PREMSAI VARMA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a href="https://www.linkedin.com/in/premsaivarma/" target="_blank" rel="noopener noreferrer" className="border-0">
      <button  className='flex self-center mr-[10px] inline-block p-3 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-blue-500 hover:b-black focus:text-accent focus:border-accent border-slate-400  2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light sm:border-0 md:border md:border-2'>
      <i className="fab fa-linkedin mr-2 fa-2x"></i>
      <span className='my-auto text-lg hidden md:block'>Linkedin</span>
    </button>
    </a>
  <a href="https://github.com/premsaivarmachekuri" target="_blank" rel="noopener noreferrer" className="border-0">
      <button  className='flex self-center mr-[10px] inline-block p-3 py-1.5 font-mono text-md  capitalize transition-all rounded cursor-pointer hover:text-black hover:b-black focus:text-accent focus:border-accent border-slate-400  2eer-checked:text-accent peer-checked:text-accent peer-checked:border-accent peer-checked:bg-accent-light sm:border-0 md:border md:border-2'>
      <i className="fab fa-github mr-2 fa-2x"></i>
      <span className='my-auto text-lg hidden md:block'>Github</span>
    </button>
    </a>
  </div>
</div>
        </div>
    )
}

export default Navbar