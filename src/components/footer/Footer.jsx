import invert from "../../assets/logo-invert.svg";
import logo from "/logo.svg";
import lkdn from "../../assets/lkdn.svg";
import x from "../../assets/X.svg";

const Footer = () => {
  return (
    <div className="bg-secondaryWhite p-4 pt-12 md:p-20 pb-5">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <img className="container md:py-0" src={invert} alt="Portal Check logo inverted"/>
          <div className="pt-16 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            <p className="text-center text-[17px] md:text-xl font-medium pb-2">Streamline verification, experience ease.
              <br/>
              Try our demo today.
            </p>
            <button className="bg-primary hover:bg-tertiaryBlue text-white font-medium px-4 py-2 rounded pointer-events-auto fade font-body">Try Demo</button>
          </div>
        </div>
      </div>

      <div className="b-line pt-28 md:pt-16"/>

      <div className="pt-8">
        <div className="container flex flex-col md:flex-row flex-wrap justify-between items-center mx-auto">
          <div>        
            <img src={logo} alt="Portal Check Logo"/>
          </div>

          <div className="flex mt-4 sm:mt-0 space-x-2">
            <a href="https://twitter.com/tryportalcheck">
              <img src={x} alt="X (formerly Twitter) logo"/>
            </a>
            <a href="https://www.linkedin.com/company/portalcheck/">
              <img src={lkdn} alt="LinkedIn logo"/>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <p className="text-center pt-12">©2023. Portal Check. All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Footer