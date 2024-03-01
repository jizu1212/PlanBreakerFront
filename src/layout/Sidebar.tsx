import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` top-0 left-0 h-full  ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300 bg-gray-800 text-white overflow-auto`}>
      <button
        className="m-2"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <nav>
          <ul className="mt-2">
            <li className="p-2 hover:bg-gray-700">Home</li>
            <li className="p-2 hover:bg-gray-700">About</li>
            <li className="p-2 hover:bg-gray-700">Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
