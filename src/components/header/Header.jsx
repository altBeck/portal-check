import hero from "../../assets/hero-img.png";

const Header = () => {
  return (
    <div className="pt-40 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col text-center">
        <div>
          <p className="text-[#013689] font-body font-medium tracking-widest">MEET PORTAL CHECK</p>

          <h1 className="text-[27px] sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">The fastest way to verify <br /> student enrollment</h1>

          <p className="pt-4 font-body sm:w-[580px] sm:mx-auto">Portal Check is building the fastest verification process for student enrollment in Nigerian universities through a solution that ensures swift and accurate authentication of academic data.</p>

          <div className="py-10">
            <button className="border border-primary hover:bg-tertiaryBlue text-primary hover:text-white font-medium px-4 py-2 rounded pointer-events-auto fade font-body">Try Demo</button>

            <p className="text-tertiaryGrey pt-4">or keep scrolling to see how it works...</p>
          </div>

          <img src={hero} alt="hero"/>
        </div>
      </div>
    </div>
  )
}

export default Header