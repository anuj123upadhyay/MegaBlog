import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // State to track theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        // 10vh
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Toggle Text Color */
  const toggleTextColor = () => {
    const rootElement = document.getElementById("root");
    // Toggle text color for the root
    rootElement.classList.toggle("white-color");

    const footerLinks = document.getElementsByClassName("toggle");
    Array.from(footerLinks).forEach((link) => {
      link.classList.toggle("text-gray-900");
      link.classList.toggle("text-alice-blue-900");
    });

    // Toggle background and text color for custom screen elements
    const screenElements = document.querySelectorAll(".custom-theme");
    screenElements.forEach((screenElement) => {
      screenElement.classList.toggle("dark-mode-bg"); // Toggle background color
      screenElement.classList.toggle("light-text"); // Toggle text color
    });

    // Toggle between dark and light mode
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  // Toggle the hamburger menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <style>
        {`
          /* Initial navbar styles */
          .header-custom-theme {
            position: relative;
            width: 100%;
            transition: all 0.3s ease-in-out;
          }

          /* Sticky navbar styles */
          .header-custom-theme.sticky {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background-color: #fff; /* Adjust as needed */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional for shadow effect */
          }
        `}
      </style>
      <header
        className={`custom-theme header-custom-theme py-3 shadow bg-gray-200 ${
          isSticky ? "sticky" : ""
        }`}
      >
        <Container>
          <nav className='flex justify-between items-center p-2'>
            <div className='mr-4 ml-10'>
              <Link to='/'>
                <Logo width='70px' />
              </Link>
            </div>

            {/* Hamburger Icon for smaller screens */}
            <button className='text-2xl md:hidden' onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navbar items for large screens */}
            <ul className='hidden md:flex ml-auto'>
              <li>
                <button
                  onClick={toggleTextColor}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >
                  {isDarkMode ? "LightMode" : "DarkMode"}
                </button>
              </li>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>

            {/* Hamburger Menu items for small screens */}
            {menuOpen && (
              <ul className='md:hidden flex flex-col absolute top-16 right-0 bg-gray-200 w-full text-center shadow-lg z-10'>
                <li className='p-4'>
                  <button
                    onClick={toggleTextColor}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {isDarkMode ? "LightMode" : "DarkMode"}
                  </button>
                </li>
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name} className='p-4'>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false); // Close menu after navigation
                        }}
                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li className='p-4'>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
