import { useState } from 'react';

const Switch = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedDiv, setExpandedDiv] = useState(null);
  const [clickedDiv, setClickedDiv] = useState(null);


  const images = [
    '/images/Frame1.png',
    '/images/Frame2.png',
    '/images/Frame3.png',
    '/images/Frame4.png',
    '/images/Frame5.png',
  ];

  // eslint-disable-next-line
  const divContent = [
    {
      headerNumber: '01',
      headerText: 'Create a Verification Link',
      paragraph: 'With Portal Check, effortlessly generate personalized verification links for each student you wish to verify. Our user-friendly interface ensures a seamless setup process.',
    },
    {
      headerNumber: '02',
      headerText: 'Share the Verification Link with Students',
      paragraph: 'Once you have generated the verification link, share it with your students. Upon receiving the link, students can easily confirm their details and connect their accounts securely.',
    },
    {
      headerNumber: '03',
      headerText: 'Students Select Their Tertiary Institution',
      paragraph: 'Within the verification link, students can effortlessly select their tertiary institution from a list of options. Simplifying the process to ensure accuracy and efficiency.',
    },
    {
      headerNumber: '04',
      headerText: 'Student School Account is Linked',
      paragraph: 'With a simple click on the verification link, students seamlessly connect their institutions. Our streamlined process ensures hassle-free account verification.',
    },
    {
      headerNumber: '05',
      headerText: 'Access the Student Information',
      paragraph: 'As soon as the verification is complete, students personalized data is available, featuring all their verified data in one place. ',
    },
  ];

  const handleDivClick = (index) => {
    setSelectedImage(index);
    if (expandedDiv === index) {
      setExpandedDiv(null);
    } else {
      setExpandedDiv(index);
    }
    setClickedDiv(index);
  };
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="flex-1 p-4 pl-0">
        {divContent.map((item, index) => (
          <div
            key={index}
            className={`p-6 cursor-pointer fade ${
              clickedDiv === index ? 'bg-white rounded-md' : ''
            }`}
            onClick={() => handleDivClick(index)}
            style={{
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transformOrigin: 'center',
              opacity: expandedDiv === index ? '1' : '0.7',
              transform: expandedDiv === index ? 'none' : 'scale(0.9)',
            }}
          >
            <h1
              className={`text-xl font-medium flex items-center ${
                clickedDiv === index ? 'text-primary' : 'text-white'
              }`}
              style={{
                transform: clickedDiv === index
                  ? 'translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                  : 'none',
              }}
            >
              <span className="text-sm mr-2">{item.headerNumber}</span>
              <span className="ml-2 text-[22px]">{item.headerText}</span>
            </h1>
            {expandedDiv === index && (
              <p className="mt-2 text-greyScale"
                style={{
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  opacity: '1',
                }}
              >
                {item.paragraph}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Images */}
      <div className="flex-1 p-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={index === selectedImage ? 'block' : 'hidden'}
          />
        ))}
      </div>
    </div>
  );
};

export default Switch;
