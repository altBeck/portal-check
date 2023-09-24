import Switch from "../switch/Switch";
import SwitchMobile from "../switchmobile/switchMobile";

const Work = () => {
  const linearBlue = {
    background: 'linear-gradient(180deg, #0053D6 0%, #013689 100%)',
  };

  return (
    <div style={linearBlue} className="lg:p-20 relative">
      <div className="px-4 max-w-6xl mx-auto relative xl:mb-[-12%]">
        <div className="pt-8 xl:pt-0">
          <h2 className="text-white text-4xl md:text-5xl font-display font-semibold">How it works</h2>

          <p className="pt-4 text-white text-xl max-w-[600px]">At Portal Check, we understand the importance of maintaining academic integrity and safeguarding against fraud. That&apos;s why with our designed user-friendly interface, the verification process becomes a breeze, allowing you to focus on what truly matters – enabling institutions, employers, and organizations to confidently validate student enrollment without the complexities. Let&apos;s explore the five simple steps to efficient verification.</p>
        </div>

        <div className="pt-4 ">
          <div className="hidden md:block">
            <Switch />
          </div>
          <div className="block md:hidden py-10">
            <SwitchMobile />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Work