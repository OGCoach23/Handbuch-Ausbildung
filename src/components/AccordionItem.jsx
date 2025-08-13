import React, { useState } from "react";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-700 whitespace-pre-line">{children}</div>}
    </div>
  );
};

export default AccordionItem;
