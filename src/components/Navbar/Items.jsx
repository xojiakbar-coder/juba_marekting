import { Link } from "react-scroll";
import navbar_itmes_data from "../../utils/navbar";
import { useState } from "react";

const Items = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <div className="flex flex-col items-center h-max text-white">
      <div className="relative w-full">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="w-full bg-white text-black text-lg font-medium py-2 px-4 rounded-md"
        >
          Hover to open dropdown
        </button>

        <div
          className={`absolute left-0 top-12 w-full bg-white shadow-lg rounded-md p-4 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div>
            <div className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition duration-200">
              Dropdown Content
            </div>
            <div className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition duration-200">
              Dropdown Content
            </div>
            <div className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition duration-200">
              Dropdown Content
            </div>
            <div className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition duration-200">
              Dropdown Content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
