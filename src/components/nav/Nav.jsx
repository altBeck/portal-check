import logo from "/logo.svg";
const Nav = () => {
  return (
    <nav className="px-2 py-4 sm:px-4 sm:py-5 fixed w-full h-[84px] z-20 top-0 left-0 bg-secondaryWhite b-line border-grey flex items-center">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>        
          <img src={logo} alt="Portal Check Logo"/>
        </div>

        <div className="hidden md:flex">
          <button className="bg-primary hover:bg-tertiaryBlue text-white font-medium px-4 py-2 font-body rounded pointer-events-auto fade">Try Demo</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav