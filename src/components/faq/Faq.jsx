import QnA from "../qna/QnA";

const Faq = () => {
  return (
    <div className="px-4 relative max-w-6xl mx-auto md:py-32">
      <div className="pb-10 pt-8 xl:pt-0">
        <h1 className="font-display font-semibold text-5xl text-primary">Frequently Asked Questions</h1>
        <p className="pt-2 text-lg text-[#666]">Learn everything about Portal Check and the most frequently asked questions.</p> 
      </div>

      <div>
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-5xl font-semibold py-4">What is Portal Check?</h1>
          <p className="text-[#666]">
            <span>
              Portal Check is an identity verification platform designed for educational institutions, students, and any other stakeholders involved in the process of verifying student enrollment in Nigerian universities.
            </span>


            <div className="my-1">
              Our cutting-edge solution guarantees rapid and precise authentication of academic data, streamlining the process like never before.
            </div>

            <span>
              By providing a swift and reliable verification process, we are not just saving time, we are transforming an essential aspect of education administration that relies on accurate academic information.
            </span>




          </p>
        </div>
        <h1 className="py-4 text-2xl md:text-5xl font-semibold">Who is Portal Check for?</h1>
        <QnA />
      </div>
    </div>
  )
}

export default Faq