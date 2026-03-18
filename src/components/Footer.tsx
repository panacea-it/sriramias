import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const websiteLinks = [
    "Home", "About Us", "Director's Messages", "Why Choose Us", 
    "Contact Us", "Our Branches", "Referal Policy", "UPSC Articles"
  ];

  const resourceLinks = [
    "UPSC Articles", "UPSC Blogs", "Exploration", "Daily Quizzes", 
    "FAQ'S", "Career", "Student Login", "Enroll Now"
  ];

  const courseDetails = [
    "All Courses", "PSIR Test Series and Mentorship", "PSIR Optional Courses", 
    "Geography Optional Foundation Courses", "Mains Enrichment Program 2025", 
    "Mains Test Series CSE 2025", "Essay Test Series 2025", "Mains Test Series CSE 2025"
  ];

  const branches = [
    {
      city: "NEW DELHI",
      address: "SRIRAM'S IAS Tower's, 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060",
      phone: "011-42430722",
      email: "sriramsias@gmail.com"
    },
    {
      city: "HYDERABAD",
      address: "SRIRAM'S IAS Tower's, 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060",
      phone: "011-42430722",
      email: "sriramsias@gmail.com"
    },
    {
      city: "PUNE",
      address: "SRIRAM'S IAS Tower's, 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060",
      phone: "011-42430722",
      email: "sriramsias@gmail.com"
    }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* 1. TOP CTA BAR */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-gray-800 pb-10 mb-12 gap-6">
        <p className="text-lg font-medium text-gray-200 text-center md:text-left">
          Need More Clarity Book a FREE Demo Class - a form on Display
        </p>
        <button className="bg-[#0089d1] hover:bg-[#0071ad] text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg active:scale-95">
          BOOK A DEMO
        </button>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12">
        
        {/* 2. LINKS GRID */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Website Links</h4>
            <ul className="space-y-3 text-sm">
              {websiteLinks.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Website Links</h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Courses Details</h4>
            <ul className="space-y-3 text-sm">
              {courseDetails.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. VERTICAL TYPOGRAPHIC SIDEBAR (The IAS IFS IPS Graphic) */}
        <div className="hidden lg:flex items-center justify-end pr-4">
          <div className="flex gap-4 select-none opacity-90">
            {["IAS", "IFS", "IPS", "IRS"].map((text) => (
              <div key={text} className="flex flex-col gap-10">
                {[...Array(4)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-white font-black text-6xl tracking-tighter leading-none -rotate-90 inline-block whitespace-nowrap"
                  >
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. BRANCH DETAILS SECTION */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pt-12 border-t border-gray-800">
        {branches.map((branch) => (
          <div key={branch.city} className="space-y-4">
            <h4 className="text-white font-black tracking-widest text-lg">{branch.city} :</h4>
            <p className="text-xs leading-relaxed text-gray-400 max-w-xs">
              {branch.address}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-1 bg-white/5 rounded">
                   <Phone size={16} className="text-white" />
                </div>
                <span className="font-bold text-white">Contact Us : <span className="text-gray-400 font-normal">{branch.phone}</span></span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="p-1 bg-white/5 rounded">
                   <Mail size={16} className="text-white" />
                </div>
                <span className="font-bold text-white">Email Id : <span className="text-gray-400 font-normal">{branch.email}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;