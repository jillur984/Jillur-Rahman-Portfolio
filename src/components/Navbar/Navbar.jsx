import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  const toggleMenu = () => {
    openMenu(!menu);
    setShowmenu(!showMenu);
  };

  const closeMenu = () => {
    openMenu(false);
    setShowmenu(true);
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu
            ? "fixed top-20 right-10 bg-gray-600 text-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-3 z-50 w-48"
            : "hidden"
        } md:static md:flex md:flex-row md:items-center md:space-x-8 font-semibold`}
      >
        <a href="#About" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:bg-blue-600 rounded-md">About</li>
        </a>
        <a href="#Experience" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:bg-blue-600 rounded-md">Experience</li>
        </a>
        <a href="#Projects" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:bg-blue-600 rounded-md">Projects</li>
        </a>
        <a href="#Footer" onClick={closeMenu}>
          <li className="text-md transition-all duration-300 p-2 md:p-0 hover:bg-blue-600 rounded-md">Contact</li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
