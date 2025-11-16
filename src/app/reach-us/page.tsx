"use client"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import ClientSection from '../components/clientSection';
import Footer from '../components/footer';

const categories = [
  { name: "workers", imageurl: "/images/wrench.png" },
  { name: "plumbers", imageurl: "/images/wrench.png" },
  { name: "Enginners", imageurl: "/images/wrench.png" },
  { name: "Supervisors", imageurl: "/images/wrench.png" },
  { name: "Technitions", imageurl: "/images/wrench.png" },
]

const subCategories = [
  "heasdfsasdfasdfasdfasfsdfdsfgadgfdafllo", "helasdfasdflo", "heasdfllo", "asdfello", "hello",
  "hasdfllo", "helasdflo", "helsdflo", "helasdffassdflo", "hasdfello",
]

const ReachUspage = () => {
  const [categoryClick, setCategoryClick] = useState(false);
  const [quantities, setQuantities] = useState(Array(subCategories.length).fill(0));
  const [selectedItems, setSelectedItems] = useState<{ name: string; quantity: number }[]>([]);
  const [getCodeSubmit,setGetCodeSubmit] =useState(false)


  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  const categoryhandle = (e: React.MouseEvent<HTMLElement>, name:string) => {
    e.preventDefault()
    setCategoryClick(true)
  }

  const handleChange = () => {
  }

  const handleIncrement = (index:number) => {
    const newQuantities = [...quantities]
    newQuantities[index]++
    setQuantities(newQuantities)
    updateSelectedItems(index, newQuantities[index])

  }

  const handleDecrement = (index:number) => {
    const newQuantities = [...quantities]
    newQuantities[index] = Math.max(0, newQuantities[index] - 1)
    setQuantities(newQuantities)
    updateSelectedItems(index, newQuantities[index])

  }
  const updateSelectedItems = (index:number, quantity:number) => {
    const name = subCategories[index]
    setSelectedItems((prev) => {
      const exists = prev.find((item) => item.name === name)
      if (quantity === 0) {
        return prev.filter((item) => item.name !== name)
      } else if (exists) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity } : item
        )
      } else {
        return [...prev, { name, quantity }]
      }
    })
  }

  const handleRemove = (name:string) => {
    const index = subCategories.indexOf(name)
    const newQuantities = [...quantities]
    newQuantities[index] = 0
    setQuantities(newQuantities)
    setSelectedItems((prev) => prev.filter((item) => item.name !== name))
  }




  console.log(selectedItems);

  return (
    <div className='w-full h-full flex items-center justify-center  flex-col space-y-2  border bg-blue-50'>
      <Header />
      {!categoryClick && (
      <div className='font-bold text-[22px] xl:text-[35px] lg:text-[32px] md:text-[28px] sm:text-[22px] slide-up py-12'>SELECT YOUR CATEGORY</div>
      ) }
      {!categoryClick && (
      <div className='w-[95%] h-max   flex flex-wrap xl:gap-4 lg:gap-2 gap-10 items-center justify-center  rounded-lg shadow-lg bg-white py-10'>
        {categories.map((item, index) => (
          <div className='xl:w-[30%] lg:w-[32%] md:w-[44%] sm:w-[45%] w-[90%] rounded-2xl shadow-lg border border-gray-200  h-[400px] flex items-center justify-center flex-col p-4 transform transition duration-300 hover:scale-102 hover:shadow-2xl  hover:shadow-orange-100 cursor-pointer' key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className='w-[90%] h-[80%] relative' onClick={(e) => categoryhandle(e, item.name)}>
              <Image src={item.imageurl} fill alt="image" className='object-cover' />
            </div>
            <div className='w-full h-[10%] text-center flex items-center justify-center text-[25px] font-semibold'>{item.name}</div>
          </div>
        ))}
      </div>
      )}
      {categoryClick && !getCodeSubmit && (
        <div className='w-full h-max   z-10 bg-white slide-down flex justify-center items-center flex-col xl:flex-row lg:flex-row md:flex-row  sm:flex-col space-y-4 py-10'>
          <div className="cursor-pointer text-[40px] text-blue-900 h-min absolute  top-0 left-10 " onClick={()=>{setCategoryClick(false);setSelectedItems([]);setQuantities(Array(subCategories.length).fill(0))}} ><i className='bx bx-left-arrow-alt'></i></div>
          <div className='w-[90%] xl:w-1/2 lg:w-[55%] md:w-[50%] sm:w-[80%] h-[500px]  flex items-center justify-center '>
            <div className='w-[90%] h-full  flex items-center justify-center rounded-lg shadow-xl  '>
              <ul className='w-[90%] h-[90%] overflow-scroll list-disc pl-1 '>
                {subCategories.map((item, index) => (
                  <li className='w-full h-[50px]  flex items-center justify-center gap-4' key={index}>
                    <h1 className='truncate font-medium text-gray-800 w-1/2'>{item}</h1>
                    <div className="w-1/3 flex items-center gap-2">
                      <button
                        onClick={() => handleDecrement(index)}
                        className="px-2 py-1 cursor-pointer rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <input
                        type="text"
                        value={quantities[index]}
                        onChange={(e) => handleChange}
                        className="w-16 text-center border py-1 rounded "
                      />
                      <button
                        onClick={() => handleIncrement(index)}
                        className="px-2 py-1 cursor-pointer rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[80%] xl:w-[40%] lg:w-[45%] md:w-[45%] sm:w-[80%] h-[500px]  flex items-center justify-center bg-white">
            <div className="w-[90%]  h-[90%] border border-gray-400 rounded-xl shadow-xl bg-blue-50 flex flex-col items-center justify-between p-6 space-y-4">

              <ul className="w-full h-[90%] overflow-auto  p-2 space-y-4 ">
                {selectedItems.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-[50px] flex justify-between items-center px-4  rounded-md shadow-sm bg-white hover:bg-gray-200 transition"
                  >
                    <span className="w-[200px] truncate font-medium text-gray-800 ">{item.name}</span>
                    <span className="font-semibold text-blue-800">{item.quantity}</span>
                    <button
                      onClick={() => handleRemove(item.name)}
                      className="text-orange-500 hover:text-orange-600 font-semibold transition cursor-pointer"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="w-full flex justify-center">
                <button
                  className="w-full text-center text-white bg-blue-900 hover:bg-orange-400 hover:text-black hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 ease-in-out font-semibold py-3 rounded-lg"
                  onClick={()=>setGetCodeSubmit(true)}
                >
                  Get Your Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {getCodeSubmit && (
        <div className={`z-50 w-full h-[900px] lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-blue-600 transition-all duration-300 z-100 ${getCodeSubmit ? "slide-up ":"slide-up"}`}>
        <div className='flex justify-between pr-4'>
            <h3 className="text-3xl font-bold text-gray-700 mb-8">
                Submit Your Project Inquiry
            </h3>
            <div className="cursor-pointer" onClick={()=>setGetCodeSubmit(false)} >✖</div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:border-blue-600 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:border-blue-600 focus:outline-none transition-colors"
                />
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-600 mb-2">Company/Organization</label>
                <input
                    id="company"
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:border-blue-600 focus:outline-none transition-colors"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="your Mobile ..."
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:border-blue-600 focus:outline-none transition-colors"
                />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message / Project Details</label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white resize-none text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-colors"
                />
            </div>
            <div className="md:col-span-2 pt-4 flex justify-center">
                <button
                    type="submit"
                    className="w-full justify-center md:w-1/3 lg:w-1/3 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    SEND REQUEST
                </button>
            </div>
        </form>
    </div>
      )}
      <ClientSection />
      <Footer />
    </div>
  )
}

export default ReachUspage