import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const services = [
    {
      name: "Land Registry Complaint Map",
      path: "land-registry",
    },
    { name: "Topographical Surveying", path: "topographical-surveying" },
    { name: "Measured Building Survey", path: "building-survey" },
    { name: "3D Scanning", path: "3d-scanning" },
    { name: "Volume Surveying", path: "volume-surveying" },
    { name: "Boundary Disputes", path: "boundary-disputes" },
    { name: "Forestry Services", path: "forestry-services" },
    { name: "Setting Out", path: "setting-out" },
    { name: "Drone Mapping", path: "drone-mapping" },
    {
      name: "Irish Water compliance Documentation",
      path: "irish-water",
    },
    { name: "As built surveys", path: "as-built-surveys" },
    { name: "Site surveys", path: "site-surveys" },
  ];

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <div className="bg-header-bg">
      <header className="z-50 mx-auto w-[90%] sm:w-[85%] md:w-full md:px-10 lg:w-[80%] lg:px-0 flex items-center justify-between font-medium h-[93px] relative">
        <Link to="." onClick={closeMenu}>
          <img
            src="/oak_logo.svg"
            alt="Oak Survey Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex justify-between items-center gap-6 md:gap-8 lg:gap-10 md:text-[14px] lg:text-[18px]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="."
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="About"
              >
                About us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `relative flex items-center gap-1 ${
                    isActive
                      ? " font-medium border-b-2 pb-2.5 border-b-brand-main text-brand-main"
                      : "font-medium"
                  }`
                }
              >
                Our Services
                <img
                  src="/arrow-down.svg"
                  alt="dropdown arrow"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`cursor-pointer transition-transform duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </NavLink>
              {showDropdown && (
                <div
                  className="absolute mt-6 text-[#2E2E2E] bg-[#F4F6FB] shadow-lg border border-[#E3E3E3] p-6 md:h-[37vh] overflow-y-auto"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="grid lg:grid-cols-2 gap-y-3 gap-x-6 text-[14px] lg:text-[14.5px] text-gray-800 font-medium md:grid-cols-1  ">
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={`/services/${service.path}`}
                        onClick={() => setShowDropdown(false)}
                        className="border-b border-gray-200 pb-2 hover:text-brand-main transition-colors duration-200 block"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-medium border-b-2 pb-3.5 border-b-brand-main text-brand-main"
                    : "font-medium hover:text-brand-main transition-colors"
                }
                to="Contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="p-3 md:p-4 hidden  rounded-lg bg-brand-main text-white lg:flex h-12 md:h-[53px] justify-center items-center gap-2 md:gap-4 font-medium text-[12px] md:text-[13px] lg:text-[14px] hover:bg-opacity-90 transition-all whitespace-nowrap">
          <img
            src="/call.svg"
            alt="call icon"
            className="w-4 h-4 lg:w-5 lg:h-5"
          />
          +353 (0)874950977
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={handleToggleMenu}
          className="sm:hidden text-3xl text-bar cursor-pointer z-50 relative"
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile menu */}
        {showMenu && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0  bg-opacity-50 z-30 sm:hidden"
              onClick={closeMenu}
            />

            {/* Menu */}
            <nav className="w-full fixed bg-white text-gray-text font-medium left-0 right-0 top-[93px] text-[0.875rem] h-[calc(100vh-93px)] z-40 overflow-y-auto sm:hidden">
              <ul className="w-full px-6">
                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="."
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="About"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>

                <li className="border-b border-b-neutral relative ">
                  <div className="flex">
                    <Link
                      to="services"
                      className="flex gap-2 items-center px-[5%] py-5 hover:bg-gray-50 transition-colors"
                      onClick={closeMenu}
                    >
                      Our Services
                    </Link>
                    <img
                      src="/arrow-down.svg"
                      alt="dropdown arrow"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`cursor-pointer transition-transform duration-200 ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {showDropdown && (
                    <div
                      className="absolute mt-0 md:mt-5 text-[#2E2E2E] bg-[#F4F6FB] shadow-lg border border-[#E3E3E3]  p-4 z-50 max-md:w-[230px] h-[35vh] overflow-y-auto"
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[13px] lg:text-[14.5px] text-gray-800 font-medium max-md:grid-cols-1 ">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={`/services/${service.path}`}
                            onClick={() => {
                              setShowDropdown(false);
                              closeMenu();
                            }}
                            className="border-b border-gray-200 pb-2 hover:text-brand-main transition-colors duration-200 block"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                <li className="border-b border-b-neutral">
                  <Link
                    className="block px-[5%] py-5 hover:bg-gray-50 transition-colors"
                    to="Contact"
                    onClick={closeMenu}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    </div>
  );
}

export default Header;
