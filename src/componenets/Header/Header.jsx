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
    const newMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", newMode === "dark");

    localStorage.setItem("mode", newMode);
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
      slug: "/signup",
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
      title: "All Categories",
      href: "/all-posts",
      description:
        "A treasure to be visited by all those hungry for wisdom and words.",
    },
    {
      title: "Technology",
      href: "/category/Tech",
      description:
        "Covers the latest trends, innovations, and insights in tech, from AI to software development.",
    },
    {
      title: "Health & Wellness",
      href: "/category/Health",
      description:
        "Focuses on physical, mental, and emotional well-being, offering tips for a balanced lifestyle.",
    },
    {
      title: "Travel",
      href: "/category/Travel",
      description: "Shares guides, tips, and experiences for exploring new destinations and cultures worldwide.",
    },
    {
      title: "Finance & Investing",
      href: "/category/Finance",
      description:
        "Provides insights on managing money, budgeting, and making informed investment choices.",
    },
    {
      title: "Personal Development",
      href: "/category/Personal_Development",
      description:
        "Offers guidance on self-improvement, goal setting, and skills to help readers grow personally and professionally.",
    },
  ];

  // Toggle the hamburger menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${isSticky ? "sticky top-0 shadow-xl bg-white text-black" : "shadow-lg"} rounded-xl transition-all duration-300 z-50 `}>
      <Container>
        <nav className="flex justify-between items-center p-4">

          {/* Logo with Shell icon */}
          <div className=" ml-4 mr-4 flex">
            <Link to="/">
              <Shell size={40} className="" />{" "}
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
                            <p style={{ fontSize: "14px" }}>
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
                    className="p-2 rounded-md"
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
              // backgroundColor: "white",
              transition: "none",
              textDecoration: "none",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: 'none',
              }
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