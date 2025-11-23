"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { CSSProperties, useEffect, useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);
  const [slideText, setSlideText] =useState("transform transition duration-300");
  const pathname = usePathname();


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 782;
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
    <header className={`${pathname==="/" ? "absolute":""} w-full h-[100px] flex flex-col  items-center justify-center  border-b border-gray-50 shadow-sm shadow-gray-50`}>
      <div className="w-full h-full flex justify-between items-center px-2 xl:px-4 lg:px-4 ">
        <div className="w-3/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-3/4 flex items-center justify-start xl:justify-center lg:justify-center   ">
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

        {isNavVisible && (
          <nav
            className={`w-3/4  h-full flex items-center justify-end
          ${slideText}
          `}
          >
            {closeBtn && (
            <div
              className="absolute top-4 right-14 z-[999] text-[32px] cursor-pointer text-white"
              onClick={closeNav}
            >
              &times;
            </div>
          )}

            <ul className={`flex flex-col md:flex-row sm:flex-row  items-start md:items-center gap-4 xl:gap-10 lg:gap-6 md:gap-6 sm:gap-4 p-6 md:p-0  justify-end  font-semibold  xl:text-[15px] lg:text-[12px] md:text-[9px] sm:text-[9px] navbar 
            ${pathname=="/" ? "text-white":"text-gray-600"}`}
            onMouseLeave={() => { setOpenDropdown(null) }}>
              <li style={{ "--delay": "0.2s" } as CSSProperties}>
                <Link href="/" className="hover:text-orange-400" onClick={closeNavOnClick}>HOME</Link>
              </li>
              <li style={{ "--delay": "0.4s" } as CSSProperties}>
                <Link href="/about-us" className="hover:text-orange-400" onClick={closeNavOnClick}>ABOUT US</Link>
              </li>
              <li style={{ "--delay": "0.6s" } as CSSProperties}>
                <Link href="/services" className="hover:text-orange-400" onClick={closeNavOnClick}>SERVICES</Link>
              </li>

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
                  <button className="flex items-center gap-1 hover:text-orange-400 cursor-pointer" >
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
                    <div className={`absolute top-6 left-0 min-w-[150px] flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-3 text-gray-200 text-xs dropDown-slide-down`}>
                      <Link href="/ongoing-projects" className=" hover:text-orange-300" onClick={closeNavOnClick}>ONGOING PROJECTS</Link>
                      <Link href="/completed-projects" className=" hover:text-orange-300" onClick={closeNavOnClick}>COMPLETED PROJECTS</Link>
                    </div>
                  )}
                </div>
              </li>

              <li style={{ "--delay": "1s" } as CSSProperties}>
                <Link href="/groups" onClick={closeNavOnClick} className="hover:text-orange-400">GROUPS</Link>
              </li>

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
                  <button className="flex items-center gap-1  hover:text-orange-400 cursor-pointer">
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
                      <Link href="/pre-cast " onClick={closeNavOnClick} className=" hover:text-orange-300">PRE-CAST</Link>
                      <Link href="/commitment" onClick={closeNavOnClick} className=" hover:text-orange-300">COMMITMENT TO QUALITY</Link>
                      <Link href="/" onClick={closeNavOnClick} className=" hover:text-orange-300">PROFILE</Link>
                    </div>
                  )}
                </div>
              </li>

              <li style={{ "--delay": "1.4s" } as React.CSSProperties}>
                <Link href={"/contact-us"} onClick={closeNavOnClick} className="hover:text-orange-400">CONTACT US</Link>
              </li>
              <button className="slide-left w-max border p-3  shadow-md hover:bg-blue-400 bg-orange-400 rounded-xl ">
          <Link href={"/reach-us"} className="text-white w-full h-full " onClick={closeNavOnClick}>REQUEST A QUOTE </Link>
        </button>
            </ul>
          </nav>
        )}        
        {isMobile && (
          <button
            className="w-1/4 h-full text-black text-3xl cursor-pointer pr-0 z-[100] flex items-center justify-end"
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
