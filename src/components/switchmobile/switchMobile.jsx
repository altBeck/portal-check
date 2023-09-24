import { useState } from 'react';

const switchMobile = () => {
  const divContent = [
    {
      headerNumber: '01',
      headerText: 'Create a Verification Link',
      paragraph: 'With Portal Check, effortlessly generate personalized verification links for each student you wish to verify. Our user-friendly interface ensures a seamless setup process.',
      priorImage: '/images/Frame1.png',
    },
    {
      headerNumber: '02',
      headerText: 'Share the Verification Link with Students',
      paragraph: 'Once you have generated the verification link, share it with your students. Upon receiving the link, students can easily confirm their details and connect their accounts securely.',
      priorImage: '/images/Frame2.png',
    },
    {
      headerNumber: '03',
      headerText: 'Students Select Their Tertiary Institution',
      paragraph: 'Within the verification link, students can effortlessly select their tertiary institution from a list of options. Simplifying the process to ensure accuracy and efficiency.',
      priorImage: '/images/Frame3.png',
    },
    {
      headerNumber: '04',
      headerText: 'Student School Account is Linked',
      paragraph: 'With a simple click on the verification link, students seamlessly connect their institutions. Our streamlined process ensures hassle-free account verification.',
      priorImage: '/images/Frame4.png',
    },
    {
      headerNumber: '05',
      headerText: 'Access the Student Information',
      paragraph: 'As soon as the verification is complete, students personalized data is available, featuring all their verified data in one place. ',
      priorImage: '/images/Frame5.png',
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleDivClick = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="rounded-xl relative">
      {divContent.map((item, index) => (
        <div
          key={index}
          className={`relative mt-6 p-4 rounded bg-white transition-opacity duration-300 ${expanded === index ? 'h-auto' : 'h-[90px]'}`}
          style={{
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            opacity: expanded === index ? 1 : 1,
            transform: expanded === index ? 'translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' : 'none',
            transformStyle: 'preserve-3d',
            width: '100%',
            height: 'auto',
          }}
          onClick={() => handleDivClick(index)}
        >
          <h1 className="text-xl font-medium text-primary flex items-center">
            <span className="text-sm ">{item.headerNumber}</span>
            <span className="ml-2 text-lg">{item.headerText}</span>
          </h1>
          <p className={`my-3 text-greyScale ${expanded === index ? 'block' : 'hidden'}`}>{item.paragraph}</p>
          <img
            src={item.priorImage}
            alt={`Prior Image ${index + 1}`}
            className={`w-full mt-2 ${expanded === index ? 'block' : 'hidden'} -mb-10`}
          />
        </div>
      ))}
    </div>
  );
};

export default switchMobile;
