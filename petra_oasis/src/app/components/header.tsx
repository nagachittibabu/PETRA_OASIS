"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const Header = () => {
  
const [moreDetails, setMoreDetails] = useState(false);
const [viewProjects, setViewProjects] = useState(false);
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
    <header className='w-full  h-[120px]   shadow-lg flex  bg-transparent z-50 flex-col border'>
      <div className='w-full h-[90%]  flex '>

        {/* company logo*/}
        <div className='w-[25%] h-full flex items-center '>
          <div className='w-full h-[90%] flex items-center justify-center'>
            <Image src={"/images/fulllogo.png"} alt="" width={250} height={20} />
          </div>

        </div>
        {isMobile  && (
        <button  className="menu_button cursor-pointer pr-4">
          <i className="bx bx-menu"></i>
        </button>
      )}

           {/*navigation bar */}
        {isNavVisible && (
          <nav className='w-[75%] h-full  flex items-center justify-center text-[15px] font-bold text-gray-200 xl:text-[15px] lg:text-[14px] md:text-[11px] sm:text-[10px]'>
            <ul className='w-[90%] h-[30px] flex items-center gap-6 xl:gap-10 lg:gap-10 md:gap-6 sm:gap-4  justify-center navbar'>
              <li style={{ "--delay": '0.2s' } as React.CSSProperties} ><Link href={"/"}>HOME</Link></li>
              <li style={{ "--delay": '0.4s' } as React.CSSProperties}><Link href={"/"}>ABOUT US</Link></li>
              <li style={{ "--delay": '0.6s' } as React.CSSProperties}><Link href={"/"}>SERVICES</Link></li> 
              <li style={{ "--delay": '0.8s' } as React.CSSProperties}><Link href={"/"}>PROJECTS</Link></li>
              <li style={{ "--delay": '1s' } as React.CSSProperties}><Link href={"/"}> GROUPS</Link></li>
              <li style={{ "--delay": '1.2s' } as React.CSSProperties}><Link href={"/"}> MORE </Link></li>
              <li style={{ "--delay": '1.4s' } as React.CSSProperties}><Link href={"/"}>CONTACT US</Link></li>
            </ul>
          </nav>
        ) }
      </div>
    </header>
  )
}

export default Header