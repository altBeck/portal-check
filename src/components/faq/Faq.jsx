import QnA from "../qna/QnA";

const Faq = () => {
  return (
    <div className="px-4 relative max-w-6xl mx-auto pt-4 pb-16 md:py-12 xl:py-32">

      <div>
        <div className="pb-4">
          <h1 className="text-2xl font-display text-primary md:text-5xl font-semibold pb-4">Who is Portal Check for?</h1>
        </div>
        <QnA />
      </div>
    </div>
  )
}

export default Faq