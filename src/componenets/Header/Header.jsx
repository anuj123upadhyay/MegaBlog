import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import icons

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const rootElement = document.getElementById("root");
    rootElement.classList.toggle("white-color");

    const footerLinks = document.getElementsByClassName("toggle");
    Array.from(footerLinks).forEach((link) => {
      link.classList.toggle("text-gray-900");
      link.classList.toggle("text-alice-blue-900");
    });

    const screenElements = document.querySelectorAll(".custom-theme");
    screenElements.forEach((el) => {
      el.classList.toggle("dark-mode-bg");
      el.classList.toggle("light-text");
    });

    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "Profile", slug: "/profile", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <style>
        {`
          .header-custom-theme {
            position: relative;
            width: 100%;
            transition: all 0.3s ease-in-out;
          }

          .header-custom-theme.sticky {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background-color: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .theme-icon {
            font-size: 1.5rem;
            color: #555;
            cursor: pointer;
            transition: color 0.3s;
          }

          .theme-icon:hover {
            color: #007bff;
          }
        `}
      </style>
      <header className={`custom-theme header-custom-theme py-3 shadow bg-gray-200 ${isSticky ? "sticky" : ""}`}>
        <Container>
          <nav className="flex justify-between items-center p-2">
            <div className="mr-4 ml-10">
              <Link to="/">
                <Logo width="70px" />
              </Link>
            </div>

            <button className="text-2xl md:hidden" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className="hidden md:flex ml-auto">
              <li>
                <button onClick={toggleTheme} className="inline-block p-2">
                  {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
                </button>
              </li>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>

            {menuOpen && (
              <ul className="md:hidden flex flex-col absolute top-16 right-0 bg-gray-200 w-full text-center shadow-lg z-10">
                <li className="p-4">
                  <button onClick={toggleTheme} className="inline-block p-2">
                    {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
                  </button>
                </li>
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li key={item.name} className="p-4">
                        <button
                          onClick={() => {
                            navigate(item.slug);
                            setMenuOpen(false);
                          }}
                          className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
                {authStatus && (
                  <li className="p-4">
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
