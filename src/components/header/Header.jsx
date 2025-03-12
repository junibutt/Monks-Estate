import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#properties", label: "Properties" },
  { href: "#blog", label: "Blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleinclick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const linkClasses = (link) =>
    link === activeLink
      ? "text-[#FF5B28] font-bold hover:text-[#FF5B28]"
      : "text-[#0F0E0E] font-semibold hover:text-[#FF5B28]";

  return (
    <div className="bg-white sticky top-0 left-0 right-0 z-[999999]">
      <div className="max-w-screen-2xl mx-auto py-4 px-5 flex justify-between items-center">
        <a href="/">
          <img className="w-28" src="../logo.png" />
        </a>

        <div className="lg:hidden">
          <button onClick={togglemenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl text-[#FF5B28]" />
            ) : (
              <MdMenu className="text-2xl text-[#FF5B28]" />
            )}
          </button>
        </div>

        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-8">
              {navItems.map((link) => {
                return (
                  <li className="hover:text-[#FF5B28]" key={link.href}>
                    <a
                      onClick={() => handleinclick(link.href)}
                      href={link.href}
                      className={linkClasses(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block">
          <button className="flex items-center text-[#0F0E0E hover:text-[#FF5B28] font-semibold border-[#FF5B2B] border-2 rounded-lg px-4 py-2">
            <a className="flex items-center gap-1" href="#contact">
              Contact Us{" "}
              <span>
                <IoIosArrowForward className="w-4 " />
              </span>
            </a>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border py-8 shadow-md z-50">
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((link) => {
                  return (
                    <li className="hover:text-[#FF5B28]" key={link.href}>
                      <a
                        onClick={() => handleinclick(link.href)}
                        href={link.href}
                        className={linkClasses(link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
