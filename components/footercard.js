// import React from 'react';

// const FooterCard = ({ testimonial, author, position }) => {
//   return (
//     <div className="bg-custom w-full md:w-1/2 p-6 rounded-lg shadow-md">
//       <p className="break-words text-bold text-black">Let's Discuss your project</p>
//       <p className="font-bold break-words">The essential to combine empathy, creativity nad rationality to meet user needs and bussiness success.</p>
//       <p className="text-sm text-gray-600 break-words">{position}</p>
//     </div>
//   );
// };

// export default FooterCard;


// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold mb-2">Let's discuss your project</h2>
      <p className="text-gray-600 mb-4">
        The essential to combine empathy, creativity and rationality to meet user needs and business success
      </p>
      <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 flex items-center">
        GET STARTED <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default ProjectCard;
