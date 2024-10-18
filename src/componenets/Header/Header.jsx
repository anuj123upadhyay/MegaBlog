"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index"; // Ensure your custom components are correctly imported
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icon for smaller screens
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"; // Ensure proper import
import { Sun, Moon, Shell, ShellIcon } from "lucide-react"; // Icons from lucide-react
// import Button from "../../components/ui/button";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // State for theme mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
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

  /* Toggle theme between dark and light mode */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode"); // Ensure dark-mode CSS is applied
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
      description: "Home - Main page",
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      description: "Login to your account",
    },
    {
      name: "Signup",
      slug: "/signUp",
      active: !authStatus,
      description: "Sign up for an account",
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,
      description: "View your profile",
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
      description: "Browse all posts",
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      description: "Create a new post",
    },
  ];

  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  // Toggle the hamburger menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header bg-white shadow ${isSticky ? "sticky" : ""}`}>
      <Container>
        <nav className="flex justify-between items-center p-4">
          {/* Logo with Shell icon */}
          <div className=" ml-4 mr-4 flex">
            <Link to="/">
              <Shell size={40} className="text-black" />{" "}
              {/* Lucide React Shell Icon */}
            </Link>
            <div className="text-2xl mb-1 ml-2 font-bold">MegaBlog</div>
          </div>

          {/* Hamburger Icon for smaller screens */}
          <button className="text-2xl md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" passHref>
                  <NavigationMenuTrigger
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      style={{
                        display: "grid",
                        gap: "10px",
                        padding: "16px",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        width: "400px",
                      }}
                    >
                      <li style={{ gridRow: "span 3" }}>
                        <NavigationMenuLink>
                          <a
                            href="/"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "end",
                              padding: "16px",
                              borderRadius: "8px",
                              background:
                                "linear-gradient(to bottom, rgba(229, 231, 235, 0.5), rgba(229, 231, 235, 1))",
                              textDecoration: "none",
                            }}
                          >
                            <ShellIcon
                              style={{ height: "24px", width: "24px" }}
                            />
                            <div
                              style={{
                                marginBottom: "8px",
                                marginTop: "16px",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              MegaBlog
                            </div>
                            <p style={{ fontSize: "14px", color: "gray" }}>
                              Beautifully designed blogs built with love and
                              modern thinking.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Introduction">
                        Re-usable content built by our community.
                      </ListItem>
                      <ListItem href="/affiliate-program" title="Affiliate">
                        How to start earning with us?
                      </ListItem>
                      <ListItem href="/all-posts" title="All Blogs">
                        Categories for Tech, Health, Edu, and more.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/all-posts" passHref>
                  <NavigationMenuTrigger
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Blogs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      style={{
                        display: "grid",
                        gap: "6px",
                        padding: "16px",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        width: "400px",
                      }}
                    >
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </Link>
              </NavigationMenuItem>

              {!authStatus && (
                <NavigationMenuItem>
                  <Link to="/login" passHref>
                    <NavigationMenuLink
                      style={{
                        textDecoration: "none",
                        padding: "8px",
                        marginRight: "12px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}

              {!authStatus && (
                <NavigationMenuItem>
                  <Link to="/signup" passHref>
                    <NavigationMenuLink
                      style={{
                        textDecoration: "none",
                        padding: "8px",
                        marginRight: "12px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      Signup
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}

              {authStatus && (
                <NavigationMenuItem>
                  <Link to="/add-post" passHref>
                    <NavigationMenuLink
                      style={{
                        textDecoration: "none",
                        padding: "8px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      Add Post
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}

              {authStatus && (
                <NavigationMenuItem>
                  <Link to="/profile" passHref>
                    <NavigationMenuLink
                      style={{
                        textDecoration: "none",
                        padding: "8px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      Profile
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}

              {authStatus && (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    style={{
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    <LogoutBtn />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}

              <NavigationMenuItem>
                <NavigationMenuLink>
                  <button
                    onClick={toggleTheme}
                    className="bg-gray-200 p-2 rounded-md"
                  >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hamburger Menu items for small screens */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col absolute top-16 right-0 bg-white w-full text-center shadow-lg z-10">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name} className="p-4">
                      <Link
                        to={item.slug}
                        className="inline-block px-6 py-2 text-black hover:bg-gray-100 rounded-lg"
                        onClick={() => setMenuOpen(false)} // Close menu after navigation
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
              )}
              <li className="p-4">
                <button
                  onClick={toggleTheme}
                  className="inline-block px-6 py-2"
                >
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </li>
              {authStatus && (
                <li className="p-4">
                  <LogoutBtn className="text-black hover:bg-gray-100 p-2 rounded-lg" />
                </li>
              )}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink>
          <a
            ref={ref}
            style={{
              display: "block",
              padding: "12px",
              borderRadius: "8px",
              backgroundColor: "white",
              transition: "background-color 0.2s",
              textDecoration: "none",
            }}
            {...props}
          >
            <div style={{ fontSize: "14px", fontWeight: "500" }}>{title}</div>
            <p style={{ fontSize: "12px", color: "gray" }}>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
