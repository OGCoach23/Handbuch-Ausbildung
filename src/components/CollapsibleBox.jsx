import React, { useState } from "react";

const CollapsibleBox = ({ title, children, defaultOpen = false, className = "", headerClassName = "", contentClassName = "" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-xl overflow-hidden shadow bg-white ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-4 bg-green-600 text-white font-semibold hover:bg-green-700 flex justify-between items-center ${headerClassName}`}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className={`p-4 space-y-4 text-gray-800 ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleBox;
