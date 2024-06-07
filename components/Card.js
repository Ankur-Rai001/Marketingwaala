import React from 'react';

const Card = ({ testimonial, author, position }) => {
  return (
    <div className="bg-custom w-1/2 p-6 rounded-lg shadow-md">
      <p className="break-words">{testimonial}</p>
      <p className="font-bold break-words">{author}</p>
      <p className="text-sm text-gray-600 break-words">{position}</p>
    </div>
  );
};

export default Card;
