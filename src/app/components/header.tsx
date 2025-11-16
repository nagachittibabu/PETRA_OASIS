"use client";

import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);
  const [slideText, setSlideText] =useState("transform transition duration-300")

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setIsNavVisible(!mobile);
      setMenuButton(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuClick = () => {
    setIsNavVisible(true);
    setCloseBtn(true);
    setSlideText("slide-down")
  };

  const closeNav = () => {
    setSlideText("easy-out transform transition duration-300");
    setCloseBtn(false);
    setIsNavVisible(false);
    setIsMobile(true);
    setMenuButton(true);
  };

  const closeNavOnClick = () => {
    if(closeBtn){
    setSlideText("slide-down ")
      closeNav();
    }
  };

  return (
    <header className="w-full h-[100px] flex flex-col  z-[100] bg-gray-100 shadow-lg items-center justify-center  z-999">
      <div className="w-full flex justify-between items-center px-0 xl:px-4 lg:px-4 md:px-4 sm:px-0 ">
        {/* company logo */}
        <div className="w-3/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 flex items-center justify-center  ">
          <Link href={"/"}>
            <Image
              src="/images/fulllogo.png"
              alt="Company Logo"
              width={250}
              height={20}
              className="slide-right"
            />
          </Link>
        </div>

        {/* navigation bar */}
        {isNavVisible && (
          <nav
            className={`w-3/4 
          ${isMobile ? (isNavVisible ? "translate-x-0" : "translate-x-full") : "translate-x-0"} ${slideText}
          `}
          >
            {closeBtn && (
            <div
              className="absolute top-4 right-14 z-[999] text-white text-[32px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}

            <ul className="flex flex-col md:flex-row sm:flex-row  items-start md:items-center gap-4 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 p-6 md:p-0  justify-center text-gray-900 font-semibold  xl:text-[15px] lg:text-[13px] md:text-[10px] sm:text-[9px] navbar"
            onMouseLeave={() => { setOpenDropdown(null) }}>
              <li style={{ "--delay": "0.2s" } as CSSProperties}>
                <Link href="/" onClick={closeNavOnClick}>HOME</Link>
              </li>
              <li style={{ "--delay": "0.4s" } as CSSProperties}>
                <Link href="/about-us" onClick={closeNavOnClick}>ABOUT US</Link>
              </li>
              <li style={{ "--delay": "0.6s" } as CSSProperties}>
                <Link href="/services" onClick={closeNavOnClick}>SERVICES</Link>
              </li>

              {/* PROJECTS dropdown */}
              <li
                style={{ "--delay": "0.8s" } as CSSProperties}

              >
                <div
                  className="relative "
                  onMouseEnter={() => setOpenDropdown("projects")}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "projects" ? null : "projects"
                    )
                  }
                >
                  <button className="flex items-center gap-1 " >
                    PROJECTS
                    <i
                      className={
                        openDropdown === "projects"
                          ? "bx bx-chevron-up"
                          : "bx bx-chevron-down"


                      }
                    ></i>
                  </button>
                  {openDropdown === "projects" && (
                    <div className={`absolute top-6 left-0 min-w-[150px] flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 text-xs dropDown-slide-down`}>
                      <Link href="/ongoing-projects" className="Z-999" onClick={closeNavOnClick}>ONGOING PROJECTS</Link>
                      <Link href="/completed-projects" className="Z-999" onClick={closeNavOnClick}>COMPLETED PROJECTS</Link>
                    </div>
                  )}
                </div>
              </li>

              <li style={{ "--delay": "1s" } as CSSProperties}>
                <Link href="/groups" onClick={closeNavOnClick}>GROUPS</Link>
              </li>

              {/* MORE dropdown */}
              <li
                style={{ "--delay": "1.2s" } as CSSProperties}

              >
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("more")}
                  onClick={() =>
                    setOpenDropdown(openDropdown === "more" ? null : "more")
                  }
                >
                  <button className="flex items-center gap-1">
                    MORE
                    <i
                      className={
                        openDropdown === "more"
                          ? "bx bx-chevron-up"
                          : "bx bx-chevron-down"
                      }
                    ></i>
                  </button>
                  {openDropdown === "more" && (
                    <div className="absolute top-6 left-0 min-w-[180px] flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 text-xs dropDown-slide-down ">
                      <Link href="/pre-cast " onClick={closeNavOnClick}>PRE-CAST</Link>
                      <Link href="/commitment" onClick={closeNavOnClick}>COMMITMENT TO QUALITY</Link>
                      <Link href="/" onClick={closeNavOnClick}>PROFILE</Link>
                    </div>
                  )}
                </div>
              </li>

              <li style={{ "--delay": "1.4s" } as React.CSSProperties}>
                <Link href={"/contact-us"} onClick={closeNavOnClick}>CONTACT US</Link>
              </li>

            </ul>
          </nav>
        )}
        <button className="slide-left w-[100px]">
          <Link href={"/reach-us"} className="w-full h-full text-[12px] xl:text-[15px] lg:text-[13px] md:text-[12px] sm:text-[9px]" onClick={closeNavOnClick}>REQUEST A QUOTE </Link>
        </button>

        
        {/* mobile open/close button */}
        {isMobile && (
          <button
            className="w-1/4 h-full text-black text-3xl cursor-pointer pr-0 z-[100]"
            onClick={menuClick}
          >
            <i className={isNavVisible ? "bx bx-menu" : "bx bx-menu"}></i>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
