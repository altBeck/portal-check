const QnA = () => {
  const gridItems = [
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


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="bg-tertiary border rounded-md fade p-4 text-white"
        >
          <h2 className="text-2xl text-[#1a1a1a] font-bold mb-2">{item.question}</h2>
          <p className="text-greyScale">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};


export default QnA