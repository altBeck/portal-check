import uni from "../../assets/university.svg";
import work from "../../assets/employer.svg";
import govt from "../../assets/government.svg";
import edu from "../../assets/education0.svg";
import alu from "../../assets/alumni-1.svg";
import three from "../../assets/3rd-party.svg";

const QnA = () => {
  const gridItems = [
    {
      image: uni,
      question: 'Nigerian Universities',
      answer: 'The system aims to benefit universities by streamlining the student verification process and reducing administrative burdens. It caters to university administrators and staff responsible for verifying student records.',
    },
    {
      image: work,
      question: 'Employers',
      answer: 'Companies and organisations that hire graduates or require verification of educational credentials can benefit from the system. HR departments, recruiters, and employers seeking to verify the qualifications of job applicants are part of the target audience.',
    },
    {
      image: govt,
      question: 'Government Authorities',
      answer: 'Government agencies responsible for overseeing education and employment may be interested in leveraging the FastTrack Student Verification System to ensure compliance with regulations and prevent fraudulent activities.',
    },
    {
      image: edu,
      question: 'Educational Institutions',
      answer: 'Other educational institutions, such as colleges or professional training providers, that require verification of student credentials for admissions or credit transfers, can utilize the system to authenticate and validate the academic achievements of prospective students.',
    },
    {
      image: alu,
      question: 'Students and Alumni',
      answer: 'While not the primary target audience, students and alumni can benefit indirectly from the system. They can have confidence that their educational achievements are accurately verified, enhancing their credibility and employability.',
    },
    {
      image: three,
      question: 'Third-Party Verification Agencies',
      answer: 'Independent organizations or agencies that offer verification services can utilize the system to enhance their capabilities and ensure the accuracy and efficiency of their verification processes.',
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="bg-tertiary border rounded-md fade p-7 text-white"
        >
          <img src={item.image} alt={`Image for ${item.question}`} className="mb-8" />
          <h2 className="text-2xl text-[#1a1a1a] font-bold mb-2">{item.question}</h2>
          <p className="text-greyScale">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};


export default QnA