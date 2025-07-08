import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram ,FaBriefcase ,FaGift  } from 'react-icons/fa';
import { IoMdMegaphone,IoIosHelpCircle  } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";

const Footer = () => {
  const sections = [
    {
      title: "ABOUT",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"]
    },
    {
      title: "GROUP COMPANIES",
      items: ["Myntra", "Cleartrip", "Shopsy"]
    },
    {
      title: "HELP",
      items: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"]
    },
    {
      title: "CONSUMER POLICY",
      items: [
        "Cancellation & Returns", "Terms Of Use", "Security",
        "Privacy", "Sitemap", "Grievance Redressal", "EPR Compliance"
      ]
    },
  ];

  const socialIcons = [
    { icon: FaFacebook, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaYoutube, link: "#" },
    { icon: FaInstagram, link: "#" },
  ];

  const bottomLinks = [
    { icon: FaBriefcase , label: "Become a Seller" },
    { icon: IoMdMegaphone, label: "Advertise" },
    { icon: FaGift , label: "Gift Cards" },
    { icon: IoIosHelpCircle , label: "Help Center" },
  ];

  const payments = ["VISA", "MC", "AE", "PP", "UPI"];

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 px-4 md:px-8 font-inter mt-6">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 pb-8 border-b border-gray-700">
        {sections.map((sec, i) => (
          <div key={i}>
            <h3 className="text-gray-500 text-xs font-semibold mb-4 uppercase">{sec.title}</h3>
            <ul className="space-y-2 text-sm">
              {sec.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Mail Us */}
        <div>
          <h3 className="text-gray-500 text-xs font-semibold mb-4 uppercase">Mail Us:</h3>
          <address className="not-italic text-sm leading-relaxed">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </address>
          <div className="flex space-x-4 mt-4">
            {socialIcons.map(({ icon: Icon, link }, i) => (
              <a key={i} href={link} className="hover:text-white"><Icon size={20} /></a>
            ))}
          </div>
        </div>

        {/* Registered Office */}
        <div>
          <h3 className="text-gray-500 text-xs font-semibold mb-4 uppercase">Registered Office Address:</h3>
          <address className="not-italic text-sm leading-relaxed">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India<br />
            CIN: U51109KA2012PTC066107<br />
            Telephone: <a href="tel:18002029898" className="text-blue-400 hover:underline">1800 202 9898</a>
          </address>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-6 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 text-sm">
          {bottomLinks.map(({ icon: Icon, label }, i) => (
            <a key={i} href="#" className="flex items-center hover:text-white rounded-md p-2">
              <Icon size={16} className="mr-2" /> {label}
            </a>
          ))}
        </div>

        {/* Refresh Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105">
          <FiRefreshCcw size={16} className="mr-2" /> Refresh Page
        </button>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <span>&copy; 2007-2025 Flipkart.com</span>
          <div className="flex space-x-2">
            {payments.map((text, i) => (
              <img key={i} src={`https://placehold.co/40x25/ffffff/000000?text=${text}`} alt={text} className="rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
