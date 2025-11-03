"use client";

import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

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

  return (
    <header className="w-full min-h-[80px] flex flex-col fixed z-[100] bg-blue-800">
      <div className="w-full flex justify-between items-center px-4 py-2">
        {/* company logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/fulllogo.png"
            alt="Company Logo"
            width={250}
            height={60}
            className="slide-right"
          />
        </div>

        {/* mobile open/close button */}
        {isMobile && (
          <button
            className="text-white text-3xl cursor-pointer pr-4 z-[200]"
            onClick={() => setIsNavVisible(!isNavVisible)}
          >
            <i className={isNavVisible ? "bx bx-x" : "bx bx-menu"}></i>
          </button>
        )}

        {/* navigation bar */}
        <nav
          className={`fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-blue-800 md:bg-transparent text-gray-200 font-bold transform transition-transform duration-500 ease-in-out 
          ${isMobile ? (isNavVisible ? "translate-x-0" : "translate-x-full") : "translate-x-0"}
          `}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 p-6 md:p-0 text-sm md:text-[15px] justify-center mt-[100px] md:mt-0 text-white font-semibold xl:text-[15px] lg:text-[15px] md:text-[13px] sm:text-[11px]">
            <li style={{ "--delay": "0.2s" } as CSSProperties}>
              <Link href="/">HOME</Link>
            </li>
            <li style={{ "--delay": "0.4s" } as CSSProperties}>
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li style={{ "--delay": "0.6s" } as CSSProperties}>
              <Link href="/services">SERVICES</Link>
            </li>

            {/* PROJECTS dropdown */}
            <li
              style={{ "--delay": "0.8s" } as CSSProperties}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("projects")}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "projects" ? null : "projects"
                  )
                }
              >
                <button className="flex items-center gap-1">
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
                  <div className="absolute top-6 left-0 min-w-[150px] flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 text-xs">
                    <Link href="/ongoing-projects">ONGOING PROJECTS</Link>
                    <Link href="/completed-projects">COMPLETED PROJECTS</Link>
                  </div>
                )}
              </div>
            </li>

            <li style={{ "--delay": "1s" } as CSSProperties}>
              <Link href="/groups">GROUPS</Link>
            </li>

            {/* MORE dropdown */}
            <li
              style={{ "--delay": "1.2s" } as CSSProperties}
              onMouseLeave={() => setOpenDropdown(null)}
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
                  <div className="absolute top-6 left-0 min-w-[180px] flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 text-xs">
                    <Link href="/feature-precast">PRE-CAST</Link>
                    <Link href="/commitment">COMMITMENT TO QUALITY</Link>
                    <Link href="/">PROFILE</Link>
                  </div>
                )}
              </div>
            </li>

            <li style={{ "--delay": "1.4s" } as React.CSSProperties}>
              <Link href={"/contact-us"}>CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
