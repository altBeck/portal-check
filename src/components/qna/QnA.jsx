import open from "../../assets/open.svg";
import close from "../../assets/close.svg";
import { useState } from 'react'

const QnA = () => {
  const faqData = [
    {
      question: 'Nigerian Universities',
      answer: 'The system aims to benefit universities by streamlining the student verification process and reducing administrative burdens. It caters to university administrators and staff responsible for verifying student records.',
    },
    {
      question: 'Employers',
      answer: 'Companies and organisations that hire graduates or require verification of educational credentials can benefit from the system. HR departments, recruiters, and employers seeking to verify the qualifications of job applicants are part of the target audience.',
    },
    {
      question: 'Government Authorities',
      answer: 'Government agencies responsible for overseeing education and employment may be interested in leveraging the FastTrack Student Verification System to ensure compliance with regulations and prevent fraudulent activities.',
    },
    {
      question: 'Educational Institutions',
      answer: 'Other educational institutions, such as colleges or professional training providers, that require verification of student credentials for admissions or credit transfers, can utilize the system to authenticate and validate the academic achievements of prospective students.',
    },
    {
      question: 'Students and Alumni',
      answer: 'While not the primary target audience, students and alumni can benefit indirectly from the system. They can have confidence that their educational achievements are accurately verified, enhancing their credibility and employability.',
    },
    {
      question: 'Third-Party Verification Agencies',
      answer: 'Independent organizations or agencies that offer verification services can utilize the system to enhance their capabilities and ensure the accuracy and efficiency of their verification processes.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="w-full md:max-w-xl pt-4 md:p-4">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="bg-[#fbfbfb] p-4 rounded-lg fade cursor-pointer"
            onClick={() => handleToggle(index)}
            style={{
              opacity: expandedIndex === index ? '1' : '1',
              transform: expandedIndex === index
                ? 'translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                : 'none',
              transformStyle: 'preserve-3d',
              width: 'auto',
              height: 'auto',
              transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-[22px]">{item.question}</span>
              {expandedIndex === index ? (
                <img src={close} alt="Expand" />
              ) : (
                <img src={open} alt="Collapse" />
              )}
            </div>
            {expandedIndex === index && <div className="text-[#666]">{item.answer}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};


export default QnA