'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className="w-full  h-max xl:h-[400px] lg:h-[300px] md:h-[280px] sm:h-[470px] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 flex items-center justify-center flex-col space-y-2">
      <div className="w-full h-[500px] xl:h-[280px] lg:h-[250px] md:h-[230px] sm:h-[420px] flex flex-wrap xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-evenly items-center  text-gray-100 xl:p-0 lg:p-0 md:p-0 sm:p-6 p-2  h-max space-x-0 md:space-x-6 ">
        <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-1/2 h-[60%] xl:h-full lg:h-full md:h-full sm:h-[60%]  flex justify-center items-center width50   footer_section ">
          <div className="w-[80%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%]  h-full padding-down space-y-2 flex flex-col items-center justify-center">
            <div className="w-[200px] h-[20%] flex items-center justify-center ">
              <Link
                href="/"
                className="relative w-[40%] h-full sm:w-[40%] sm:h-[100%] md:w-[40%] md:h-[100%] lg:w-[40%] lg:h-[100%] xl:w-[80%] xl:h-[100%]  overflow-hidden rounded"
              >
                <Image
                  src="/images/fulllogo.png"
                  alt="Company Logo"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <ul className="w-full h-[10%] flex items-center justify-center space-x-4 text-[20px] xl:text-[25px] lg:text-[24px] md:text-[23px] sm:text-[22px]">
              <Link href={""}><li className='bx bxl-instagram' ></li></Link>
              <Link href={""}><li className='bx bxl-whatsapp' ></li></Link>
              <Link href={""}><li className='bx bxl-facebook' ></li></Link>
            </ul>
          </div>
        </div>
        <div className=" w-1/2 xl:w-1/8 lg:w-1/8 md:w-1/6 sm:w-1/2 h-[40%] xl:h-full lg:h-full md:h-full sm:h-1/2 flex  justify-center items-center width50 footer_section  ">
          <div className="w-[90%] xl:w-full lg:w-full md:w-full sm:w-[80%]  h-3/4  flex flex-col space-y-5  text-center  padding-down ">
            <h1 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">QUICK LINKS</h1>
            <ul className="flex  flex-col space-y-5 text-gray-100 textleft text-[11px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px] xl:space-y-5 lg:space-y-4 md:space-y-3 sm:space-y-4">
              < li><a href="" className="hover:underline ">HOME</a></ li>
              < li><a href="/about-us" className="hover:underline ">ABOUT US</a></ li>
              < li><a href="/ongoing-projects" className="hover:underline ">PROJECTS</a></ li>
              < li><a href="/services" className="hover:underline ">SERVICES</a></ li>
            </ul>

          </div>
        </div>
        <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-[30%] sm:w-1/2  h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex flex-col justify-center items-center xl:items-center lg:items-center md:items-center sm:items-center  footer_section ">
          <div className="w-[90%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%] h-full xl:h-3/4 lg:h-3/4 md:h-3/4 sm:h-full flex flex-col space-y-2  text-center  padding-down text-left">
            <h3 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">CONTACT US</h3>

            <div>
              <h4 className="font-semibold text-[14px] flex items"><i className='pr-2 bx bx-current-location text-white'></i>We Are Here</h4>
              <p className="text-[11px]">P.O BOX:67411,Dubai - United Arab Emirates</p>
            </div>

            <div>
              <h4 className="font-semibold text-[14px]"><i className='pr-2 bx bxs-phone-call' ></i>CALL US</h4>
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row text-[11px]">
                <a href="tel:+97165217424" className="hover:underline block ">+97165217424,</a>
              </div>
            </div>
            <div >
              <h4 className="font-semibold text-[14px]"><i className='pr-2 bx bxs-envelope' ></i>MAIL US</h4>
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row text-[11px]">
                <a href="mailto:info@wahatsiwa.in" className="hover:underline block ">info@wahatsiwa.in,</a>
                <a href="mailto:wahatliwantechllc@gmail.com" className="hover:underline block text-[12px]">wahatliwantechllc@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 xl:w-1/8 lg:w-1/8 md:w-1/6 sm:w-1/2 h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex  justify-center items-start xl:items-center lg:items-center md:items-center sm:items-start width50 footer_section  ">
        <div className="w-full h-[70%] xl:h-[50%] lg:h-[50%] md:h-[50%] sm:h-[50%]  flex justify-center  items-start  ">
              <div className="w-full h-[100%]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3262.464013588551!2d55.39516899999999!3d25.366621000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIxJzU5LjgiTiA1NcKwMjMnNDIuNiJF!5e1!3m2!1sen!2sin!4v1763226817737!5m2!1sen!2sin" width="100%" height="100%" ></iframe>
              </div>
            </div>
        </div>
      </div>
      <hr  className="w-[85%] rounded-full border border-gray-100 flex items-center justify-center"/>
      <div className="w-[85%] h-[50px]  flex justify-between  items-center xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[14px] text-gray-300 font-normal text-[9px] ">
        <p className="text-center ">&copy;copyright2025</p>
        <p>Developed by G.Naga Chittibabu, J.Savya & P.Veeraswamy</p>
      </div>
    </footer>
  )
}
export default Footer



