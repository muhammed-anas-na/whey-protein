"use client";
import React, { useState } from 'react';
import { ShoppingCart, User, MessageCircle, Menu, X, Twitter, Facebook, Instagram } from 'lucide-react';
import FaqSection from './Faq';

const WimpDecafLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 bottom-5 bg-black rounded-full p-2 z-50" title="Customer support">
        <MessageCircle className="text-[#FE5000] w-6 h-6 md:w-8 md:h-8" />
      </div>

      <div className="min-h-screen bg-white mb-0">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 relative">
          <img src="logo.png" alt="Wimp Logo" className="w-16 md:w-24" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-[#FE5000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-[#FE5000]">Shop</a>
            <a href="#" className="text-black hover:text-[#FE5000]">Our Story</a>
            <a href="#" className="text-black hover:text-[#FE5000]">Company</a>
            <a href="#" className="text-black hover:text-[#FE5000]">FAQs</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <User className="w-6 h-6 text-black hover:text-[#FE5000] cursor-pointer" />
            <ShoppingCart className="w-6 h-6 text-black hover:text-[#FE5000] cursor-pointer" />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
              <div className="flex flex-col p-4">
                <a href="#" className="py-2 text-black hover:text-[#FE5000]">Shop Coffee</a>
                <a href="#" className="py-2 text-black hover:text-[#FE5000]">Our Story</a>
                <a href="#" className="py-2 text-black hover:text-[#FE5000]">Why Decaf</a>
                <a href="#" className="py-2 text-black hover:text-[#FE5000]">FAQs</a>
                <div className="flex space-x-4 pt-4">
                  <User className="w-6 h-6 text-black hover:text-[#FE5000] cursor-pointer" />
                  <ShoppingCart className="w-6 h-6 text-black hover:text-[#FE5000] cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="text-center py-8 md:py-16 px-4 flex flex-col justify-center items-center">
          <div className="mb-4 relative inline-block">
            <span className="text-[#D3D3D3] text-base md:text-lg line-through">
              Not you'r regular protein
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-black mb-6 md:mb-8 tracking-tighter">
            Whey <span className="text-[#FE5000] bg-black px-2 md:px-4">Protein</span>
          </h1>

          <p className="text-lg md:text-xl text-black max-w-2xl mb-3 mx-auto px-4">
              Fuel Your Strength, Elevate Your Fitness
          </p>
          <h1 className="mb-5 text-black text-sm md:text-base">⭐⭐⭐⭐⭐ 3+ million happy customers</h1>
          <button className="relative inline-flex items-center justify-start px-4 md:px-6 py-2 md:py-3 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FE5000] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Shop Now</span>
          </button>
          <img src="product.png" className="border-none w-full md:w-1/2 mt-8" />
        </div>
      </div>

      {/* Premium Section */}
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src="image01.png"
                alt="Premium ingredients"
                className="object-contain h-[50vh] md:h-[100vh] md:w-auto"
              />
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <span className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-relaxed block">
                <span className="text-[#FE5000] bg-black px-2 py-1 inline-block my-1">Premium</span>
                {' '}ingredients,
                <br className="my-2" />
                BioAlpine offers a{' '}
                <span className="text-[#FE5000] bg-black px-2 py-1 inline-block my-1">unique</span>
                {' '}taste inspired by global
                <span className="text-[#FE5000] bg-black px-2 py-1 inline-block my-1">traditions.</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Section */}
      <div className="bg-white min-h-screen text-orange-600">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight">
                Crafted with
                <span className="bg-black text-white px-2 md:px-3 font-bold">Natural</span>
                {' '}ingredients and artisanal expertise, our sophisticated
                <span className="bg-black text-white px-2 md:px-3 font-bold">flavors</span> deliver a truly
                <span className="bg-black text-white px-2 md:px-3 font-bold">luxurious.</span>
              </span>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src="image02.png"
                alt="Premium ingredients"
                className="object-contain h-[50vh] md:h-[100vh] w-auto"
              />
            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#FE5000] p-10'>
        <h1 className='text-center text-6xl font-bold'>Latest Products</h1>
        <div className="flex flex-wrap my-5 gap-5 justify-center">
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-inner duration-300 w-full sm:w-[48%] lg:w-[23%]">
    <img
      src="product.png"
      className="h-48 w-auto object-contain mb-4 transition transform hover:rotate-3 duration-300"
    />
    <h2 className="text-xl font-semibold text-black">Italian Chocolate</h2>
    <p className="text-orange-500 mt-2">Packed with protein</p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-inner duration-300 w-full sm:w-[48%] lg:w-[23%]">
    <img
      src="product.png"
      className="h-48 w-auto object-contain mb-4 transition transform hover:rotate-3 duration-300"
    />
    <h2 className="text-xl font-semibold text-black">Blueberry</h2>
    <p className="text-orange-500 mt-2">Packed with protein</p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-inner duration-300 w-full sm:w-[48%] lg:w-[23%]">
    <img
      src="product.png"
      className="h-48 w-auto object-contain mb-4 transition transform hover:rotate-3 duration-300"
    />
    <h2 className="text-xl font-semibold text-black">Cafe Mocha</h2>
    <p className="text-orange-500 mt-2">Packed with protein</p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-inner duration-300 w-full sm:w-[48%] lg:w-[23%]">
    <img
      src="product.png"
      className="h-48 w-auto object-contain mb-4 transition transform hover:rotate-3 duration-300"
    />
    <h2 className="text-xl font-semibold text-black">Mango</h2>
    <p className="text-orange-500 mt-2">Packed with protein</p>
  </div>

</div>


<div className='flex justify-center mt-10'>
<a href="#_" className="relative inline-block px-10 font-medium group py-2">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">Shop Now</span>
        </a>
</div>

      </div>
          <FaqSection/>
      <Footer />
    </>
  );
};

export default WimpDecafLanding;



const Footer = () => {
  return (
    <footer className="static bg-black  text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Platform Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Plans & Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Personal AI Manager</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI Business Writer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI Data Processing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Work With Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog & News</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Free Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Press Conferences</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookies Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Data Processing</a></li>
            </ul>
          </div>
        </div>

        {/* Twitter Card - Desktop Only */}
        <div className="hidden lg:block mb-12">
          <div className="bg-zinc-900 p-6 rounded-xl max-w-md">
            <div className="flex items-start gap-3">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="logo.png" alt="Maxwell" className="" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Biolpine</h4>
                  <span className="text-gray-400">@biolpine</span>
                </div>
                <p className="mt-2">We're just announced new feature that would help you increase your experience of using Biolpine!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-[#FE5000]"></div>
            <span className="text-gray-300">Biolpine, 2023.</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};