"use client";

import React from "react";
import Image from "next/image";

const ContactPage = () => {
    return (
        <section className="w-full min-h-screen bg-white relative">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Let's Build Something Great Together
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-blue-600">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-700 mb-8">
                                Submit Your Project Inquiry
                            </h3>
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
                                    placeholder="+971..."
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
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <div className="space-y-6">

                            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition">
                                <div className="flex items-center space-x-4">
                                    <i className="bx bxs-location-plus text-blue-600 text-4xl"></i>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Primary Office</h4>
                                        <p className="text-sm text-gray-600">P.O BOX: 67411, Dubai - United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition">
                                <div className="flex items-center space-x-4">
                                    <i className="bx bxs-phone-call text-blue-600 text-4xl"></i>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Give Us A Call</h4>
                                        <a href="tel:+97165217424" className="text-sm text-gray-600 hover:text-blue-800 transition block">+971 6 521 7424</a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition">
                                <div className="flex items-center space-x-4">
                                    <i className="bx bxs-envelope text-blue-600 text-4xl"></i>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Email Support</h4>
                                        <a href="mailto:info@wahatsiwa.in" className="text-sm text-gray-600 hover:text-blue-800 block">info@wahatsiwa.in</a>
                                        <a href="mailto:wahatliwantechllc@gmail.com" className="text-sm text-gray-600 hover:text-blue-800 block">wahatliwantechllc@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Connect on Social</h4>
                            <div className="flex space-x-6 text-3xl text-gray-600">
                                <a href="#" aria-label="Twitter" className='hover:text-blue-600 transition'><i className='bx bxl-twitter'></i></a>
                                <a href="#" aria-label="Instagram" className='hover:text-blue-600 transition'><i className='bx bxl-instagram'></i></a>
                                <a href="#" aria-label="WhatsApp" className='hover:text-blue-600 transition'><i className='bx bxl-whatsapp'></i></a>
                                <a href="#" aria-label="Facebook" className='hover:text-blue-600 transition'><i className='bx bxl-facebook'></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

