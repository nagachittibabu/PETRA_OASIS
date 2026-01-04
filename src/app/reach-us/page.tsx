"use client"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect, useState } from 'react'
import ClientSection from '../components/clientSection';
import Footer from '../components/footer';

const categories = [
  {name:'Technicians',imageurl:'/images/technicians.jpg'},
  { name: "Plumbers", imageurl: "/images/electricalquoteimage.jpg" },
  { name: "Electricians", imageurl: "/images/mechanicalquoteimage.jpg" },
  { name: "Ductors", imageurl: "/images/ductingquoteimage.jpg" },
  { name: "Helpers", imageurl: "/images/helpersquoteimage.jpg" },

  
]
const subcontracts=[{ name: "Electrical Workers", imageurl: "/images/helpersquoteimage.jpg" },]

const subCategories = [['Electrician','Plumber','Ductors','Helper'],["Plumber","Helper"],["Electrician","Helper"],["Ductors","Helper"],["Helpers"],]

const supplycontracts =[['Electrician']]

const ReachUspage = () => {
  const [categoryClick, setCategoryClick] = useState(false);
  const [clickedCategory,SetClickedCategory]=useState(0);
  const [quantities, setQuantities] = useState(Array(subCategories.length).fill(0));
  const [selectedItems, setSelectedItems] = useState<{ name: string; quantity: number }[]>([]);
  const [getCodeSubmit,setGetCodeSubmit] =useState(false);
  const [mainCategorySelect,setMainCategorySelect]=useState("");
  const [CategoryIntro,setCategoryIntro]=useState(true)


  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  const categoryhandle = (e:number) => {
    setCategoryClick(true);
    SetClickedCategory(e);
  }

  const handleIncrement = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  
    const itemName = filterSubCategories[0][index];
    const existingIndex = selectedItems.findIndex(item => item.name === itemName);
  
    if (existingIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingIndex].quantity = updatedQuantities[index];
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { name: itemName, quantity: 1 }]);
    }
  };
  
  const handleDecrement = (index: number) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
  
      const itemName = filterSubCategories[0][index];
      const existingIndex = selectedItems.findIndex(item => item.name === itemName);
  
      if (existingIndex !== -1) {
        const updatedItems = [...selectedItems];
        if (updatedQuantities[index] === 0) {
          updatedItems.splice(existingIndex, 1);
        } else {
          updatedItems[existingIndex].quantity = updatedQuantities[index];
        }
        setSelectedItems(updatedItems);
      }
    }
  };

  const handleRemove = (name: string) => {
    const indexToReset = filterSubCategories[0].findIndex(item => item === name);
    if (indexToReset !== -1) {
      const updated = [...quantities];
      updated[indexToReset] = 0;
      setQuantities(updated);
      const updatedItems = selectedItems.filter(item => item.name !== name);
    setSelectedItems(updatedItems);

    }
  };


  const filterSubCategories = subCategories.filter((item, index) => index === clickedCategory);
  
  return (
    <div className='w-full h-full flex items-center justify-center  flex-col space-y-4  border bg-transparent'>
      {CategoryIntro && (
      <div className="w-[95%] h-screen flex items-center justify-center gap-6 reach-us bg-transparent relative rounded-[50px] overflow-hidden" >
        <div className="absolute w-full h-full inset-0 bg-black/50"></div>
        <div
          className="w-[30%] text-center cursor-pointer p-6 bg-blue-200 text-xl font-bold rounded-lg shadow-md hover:bg-blue-400 transition slide-up"
          onClick={() => {setMainCategorySelect('mep');setCategoryIntro(false)}}
        >
          MEP SUPPLY
        </div>
        <div
          className="w-[30%] text-center cursor-pointer p-6 bg-orange-200 text-xl font-bold rounded-lg shadow-md hover:bg-orange-400 transition slide-down"
          onClick={() => {setMainCategorySelect('supply');setCategoryIntro(false)}}
        >
          SUB CONTRACTS
        </div>
      </div>
      )}
      {!CategoryIntro && !categoryClick && (
      <div className='w-[95%] h-max   flex flex-wrap xl:gap-8 lg:gap-8 gap-10 items-center justify-center  rounded-lg shadow-lg bg-white py-10'>
        <div className='font-bold text-[22px] xl:text-[35px] lg:text-[32px] md:text-[28px] sm:text-[22px] slide-up py-4'>SELECT YOUR CATEGORY</div>
        <div className="cursor-pointer text-[40px] text-blue-900 font-bold h-min absolute  top-40 left-20 " onClick={() => {setCategoryIntro(true);setCategoryClick(false)}} ><i className='bx bx-left-arrow-alt'></i></div>
        {(mainCategorySelect==='mep' ? categories :subcontracts).map((item, index) => (
          <div className={`${index===0? 'w-[90%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%]':'xl:w-[40%] lg:w-[32%] md:w-[44%] sm:w-[45%] w-[90%]'}  rounded-2xl shadow-lg border border-gray-200  h-[400px] flex items-center justify-center flex-col p-4 transform transition duration-300 hover:scale-102 hover:shadow-2xl  hover:shadow-blue-200 cursor-pointer`} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className='w-[90%] h-[80%] relative' onClick={(e) => categoryhandle(index)}>
              <Image src={item.imageurl} fill alt="image" className='object-cover' />
            </div>
            <div className='w-full h-[10%] text-center flex items-center justify-center text-[25px] font-semibold'>{item.name}</div>
          </div>
        ))}
      </div>
      )
      }
      {categoryClick && !getCodeSubmit && (
        <div className='w-full h-max   z-10 bg-white slide-down flex justify-center items-center flex-col xl:flex-row lg:flex-row md:flex-row  sm:flex-col space-y-4 py-10'>
          <div className="cursor-pointer text-[40px] text-blue-900 h-min absolute  top-0 left-10 " onClick={() => {
            setCategoryClick(false); setSelectedItems([]); setSelectedItems([]);
            setQuantities(Array(subCategories[clickedCategory].length).fill(0));setCategoryIntro(true)
          }} ><i className='bx bx-left-arrow-alt'></i></div>
          <div className='w-[90%] xl:w-1/2 lg:w-[55%] md:w-[50%] sm:w-[80%] h-[500px]  flex items-center justify-center '>
            <div className='w-[90%] h-full  flex items-center justify-center rounded-lg shadow-xl  '>
              <ul className='w-[90%] h-[90%] overflow-scroll list-disc pl-1 '>
                 {(mainCategorySelect==='mep'? filterSubCategories[0]:supplycontracts).map((item, index) => (
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
                        readOnly
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