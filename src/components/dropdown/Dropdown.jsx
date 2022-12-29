import { Link } from "react-router-dom";
import { FiChevronUp } from "react-icons/fi";
import "./Dropdown.css";
import { useState } from "react";

function Dropdown() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="flex justify-between items-center ml-2 mb-2 text-white bg-[#393e46] w-60 mt-8 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-cyan-400 transition-all duration-200"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="text-lg font-semibold tracking-wide">
          Select Category
        </span>
        <FiChevronUp
          size={30}
          className={
            isOpen
              ? "rotate-180 transition-all duration-200"
              : "transition-all duration-200"
          }
        />
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div className="space-y-4 list-none text-white ml-2 text-lg bg-[#393e46] w-60 mt-1 p-4 rounded-lg shadow-lg absolute z-10">
          <li className="hover:text-cyan-400">
            <Link to="/top">Top</Link>
          </li>
          <li className="hover:text-cyan-400">
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className="hover:text-cyan-400">
            <Link to="/">Airing</Link>
          </li>
        </div>
      </div>
    </>
    // <div className="dropdown">
    //   <button className="dropbtn">Select Category <div className="chevron"><FiChevronUp size={25}/></div></button>
    //   <div className="dropdown-content">
    //     <ul>
    //       <li><Link to='/top'>Top</Link></li>
    //       <li><Link to='/upcoming'>Upcoming</Link></li>
    //       <li><Link to='/'>Airing</Link></li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Dropdown;
