import React from 'react';

const ImpulseBox = ({ title, content, borderColor = 'border-gray-300' }) => {
  return (
    <div className={`border-l-4 ${borderColor} bg-white shadow p-4 rounded-lg`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ImpulseBox;
