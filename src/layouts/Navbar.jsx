import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Premium Floating Dropdown Link Style
  const dropdownLinkStyle = "block px-7 py-3.5 text-[15.5px] font-semibold text-gray-700 hover:text-[#0CA59D] hover:bg-[#0CA59D]/5 hover:pl-9 transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0CA59D] before:opacity-0 hover:before:opacity-100";

  // Dropdown Container Style (Floating, detached, beautiful shadow)
  const dropdownContainerStyle = "absolute left-0 top-[120%] w-[250px] bg-white text-gray-700 shadow-[0_30px_60px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 py-3 rounded-2xl border border-gray-100 transform translate-y-4 group-hover:translate-y-0 before:content-[''] before:absolute before:-top-2 before:left-8 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-gray-100";
  
  // Nested Dropdown Container Style
  const nestedDropdownContainerStyle = "absolute left-[105%] top-0 w-[240px] bg-white text-gray-700 shadow-[0_30px_60px_rgba(0,0,0,0.12)] opacity-0 group-hover/sub:opacity-100 invisible group-hover/sub:visible transition-all duration-300 z-50 py-3 rounded-2xl border border-gray-100 transform translate-x-4 group-hover/sub:translate-x-0";


  return (
    <>
      <nav className={`w-full z-40 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 bg-[#0CA59D] shadow-md py-3' : 'absolute top-0 left-0 bg-transparent py-4 lg:py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-[28px] tracking-wide cursor-pointer z-50 hover:opacity-90 transition-opacity">
            <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
               <circle cx="7" cy="12" r="1.5" />
               <circle cx="17" cy="12" r="1.5" />
               <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1" />
            </svg>
            Evolta
          </Link>
          
          {/* Hamburger Icon for Mobile */}
          <button 
            className="lg:hidden text-white z-50 focus:outline-none p-2 hover:text-[#ffa800] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-10 font-semibold text-[15.5px]">
            {/* Home */}
            <div className="relative group">
              <Link to="/" className="text-[#ffa800] flex items-center gap-1.5 py-4">
                Home 
              </Link>
            </div>

            {/* Pages */}
            <div className="relative group">
              <Link to="#" className="text-white hover:text-[#ffa800] transition-colors flex items-center gap-1.5 py-4 cursor-pointer">
                Pages 
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              {/* Pages Dropdown */}
              <div className={dropdownContainerStyle}>
                <Link to="/about" className={dropdownLinkStyle}>Corporate Overview</Link>
                <Link to="/features" className={dropdownLinkStyle}>Platform Features</Link>
                <Link to="/team" className={dropdownLinkStyle}>Leadership Team</Link>
                <Link to="/pricing" className={dropdownLinkStyle}>Enterprise Pricing</Link>
                
                {/* Nested Shop */}
                <div className="relative group/sub">
                  <Link to="/shop" className={`${dropdownLinkStyle} flex justify-between items-center w-full hover:pl-8`}>
                    Store
                    <svg className="w-4 h-4 text-gray-400 group-hover/sub:text-[#0CA59D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </Link>
                  <div className={nestedDropdownContainerStyle}>
                    <Link to="/shop" className={dropdownLinkStyle}>Enterprise Store</Link>
                    <Link to="/product-details" className={dropdownLinkStyle}>License Details</Link>
                    <Link to="/cart" className={dropdownLinkStyle}>Shopping Cart</Link>
                    <Link to="/checkout" className={dropdownLinkStyle}>Secure Checkout</Link>
                  </div>
                </div>

                {/* Nested Blog */}
                <div className="relative group/sub">
                  <Link to="/blog" className={`${dropdownLinkStyle} flex justify-between items-center w-full hover:pl-8`}>
                    Insights
                    <svg className="w-4 h-4 text-gray-400 group-hover/sub:text-[#0CA59D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </Link>
                  <div className={nestedDropdownContainerStyle}>
                    <Link to="/blog" className={dropdownLinkStyle}>Latest Insights</Link>
                    <Link to="/blog-sidebar" className={dropdownLinkStyle}>Featured Articles</Link>
                    <Link to="/blog-details" className={dropdownLinkStyle}>In-depth Analysis</Link>
                  </div>
                </div>

                <Link to="/faq" className={dropdownLinkStyle}>Knowledge Base</Link>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <Link to="#" className="text-white hover:text-[#ffa800] transition-colors flex items-center gap-1.5 py-4 cursor-pointer">
                Services 
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className={dropdownContainerStyle}>
                <Link to="/services-1" className={dropdownLinkStyle}>Core Competencies</Link>
                <Link to="/services-2" className={dropdownLinkStyle}>Enterprise Solutions</Link>
                <Link to="/services-details" className={dropdownLinkStyle}>Architecture Specs</Link>
              </div>
            </div>

            {/* Shop */}
            <div className="relative group">
              <Link to="/shop" className="text-white hover:text-[#ffa800] transition-colors flex items-center gap-1.5 py-4 cursor-pointer">
                Store 
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className={dropdownContainerStyle}>
                <Link to="/shop" className={dropdownLinkStyle}>Enterprise Store</Link>
                <Link to="/product-details" className={dropdownLinkStyle}>License Details</Link>
                <Link to="/cart" className={dropdownLinkStyle}>Shopping Cart</Link>
                <Link to="/checkout" className={dropdownLinkStyle}>Secure Checkout</Link>
              </div>
            </div>

            {/* Blog */}
            <div className="relative group">
              <Link to="/blog" className="text-white hover:text-[#ffa800] transition-colors flex items-center gap-1.5 py-4 cursor-pointer">
                Insights 
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className={dropdownContainerStyle}>
                <Link to="/blog" className={dropdownLinkStyle}>Latest Insights</Link>
                <Link to="/blog-sidebar" className={dropdownLinkStyle}>Featured Articles</Link>
                <Link to="/blog-details" className={dropdownLinkStyle}>In-depth Analysis</Link>
              </div>
            </div>

            <Link to="/contact" className="text-white hover:text-[#ffa800] transition-colors py-4">Contact</Link>
          </div>

          {/* Action Icons and Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/cart" className="text-white hover:text-[#ffa800] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <button className="text-white hover:text-[#ffa800] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/contact" className="bg-[#ffa800] hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_4px_14px_0_rgba(255,168,0,0.39)] transition-all text-[15px] ml-2 transform hover:-translate-y-1">
              Free Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay (Dark Backdrop) */}
      {isMobileMenuOpen && (
        <div 
           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity lg:hidden"
           onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 w-[300px] sm:w-[350px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
           <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl tracking-wide">
              <svg className="w-8 h-8 text-[#0CA59D]" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
                 <circle cx="7" cy="12" r="1.5" />
                 <circle cx="17" cy="12" r="1.5" />
                 <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1" />
              </svg>
              Evolta
           </div>
           <button 
             onClick={() => setIsMobileMenuOpen(false)}
             className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-gray-50 rounded-full hover:bg-red-50"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        {/* Sidebar Menu Items */}
        <div className="flex-grow overflow-y-auto py-6 px-4">
           <ul className="flex flex-col space-y-2">
              <li><Link to="/" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Corporate Overview</Link></li>
              <li><Link to="/services-1" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Core Competencies</Link></li>
              <li><Link to="/services-2" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Enterprise Solutions</Link></li>
              <li><Link to="/shop" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Store</Link></li>
              <li><Link to="/blog" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link></li>
              <li><Link to="/contact" className="block text-gray-800 font-bold text-lg p-3 rounded-lg hover:bg-[#0CA59D]/10 hover:text-[#0CA59D] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
           </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
           <Link to="/contact" className="block w-full bg-[#0CA59D] text-white text-center font-bold py-3.5 rounded-lg shadow-md hover:bg-teal-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
             Get A Free Quote
           </Link>
           <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0CA59D] transition-colors">
                 <span className="font-bold">fb</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0CA59D] transition-colors">
                 <span className="font-bold">tw</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0CA59D] transition-colors">
                 <span className="font-bold">in</span>
              </a>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
