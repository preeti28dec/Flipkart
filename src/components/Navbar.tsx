import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiChevronDown,
  FiMoreVertical,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  IoCubeOutline,
  IoHeartOutline,
  IoPricetagOutline,
  IoGiftOutline,
  IoNotificationsOutline,
  IoLogOutOutline,
  IoHelpCircleOutline,
  IoCloudDownloadOutline,
} from "react-icons/io5";
import { MdOutlineStorefront, MdTrendingUp } from "react-icons/md";

const Dropdown = ({ items }) => (
  <div className="absolute top-full right-0 mt-1 w-60 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-20">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.href || "#"}
        className={`flex items-center gap-3 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${
          item.borderTop ? "border-t mt-1 pt-2" : ""
        }`}
      >
        {item.icon} {item.label}
      </a>
    ))}
  </div>
);

const profileItems = [
  { icon: <FiUser className="w-4 h-4 text-blue-600" />, label: "My Profile" },
  { icon: <IoCubeOutline className="w-4 h-4 text-blue-600" />, label: "Flipkart Plus Zone" },
  { icon: <MdOutlineStorefront className="w-4 h-4 text-blue-600" />, label: "Orders" },
  { icon: <IoHeartOutline className="w-4 h-4 text-blue-600" />, label: "Wishlist" },
  { icon: <IoPricetagOutline className="w-4 h-4 text-blue-600" />, label: "Coupons" },
  { icon: <IoGiftOutline className="w-4 h-4 text-blue-600" />, label: "Gift Cards" },
  {
    icon: <IoNotificationsOutline className="w-4 h-4 text-blue-600" />,
    label: "Notifications",
    borderTop: true,
  },
  { icon: <IoLogOutOutline className="w-4 h-4 text-blue-600" />, label: "Logout" },
];

const moreItems = [
  { icon: <IoNotificationsOutline className="w-5 h-5 text-blue-600" />, label: "Notification Preferences" },
  { icon: <IoHelpCircleOutline className="w-5 h-5 text-blue-600" />, label: "24x7 Customer Care" },
  { icon: <MdTrendingUp className="w-5 h-5 text-blue-600" />, label: "Advertise" },
  { icon: <IoCloudDownloadOutline className="w-5 h-5 text-blue-600" />, label: "Download App" },
];

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white font-sans shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Nav */}
        <div className="flex items-center justify-between h-16">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600 italic">
              Flipkart
            </a>
            <p className="text-xs text-gray-500 italic">
              Explore <span className="text-yellow-500 font-semibold">Plus</span>
            </p>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full bg-gray-100 border border-transparent rounded-lg py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-blue-600">
                <FiUser className="h-6 w-6" />
                <span>Preeti</span>
                <FiChevronDown className={`h-4 w-4 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
              </button>
              {profileOpen && <Dropdown items={profileItems} />}
            </div>

            <a href="#" className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-blue-600">
              <FiShoppingCart className="h-6 w-6" />
              <span>Cart</span>
            </a>

            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600">
              Become a Seller
            </a>

            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 p-2">
                <FiMoreVertical className="h-6 w-6" />
              </button>
              {moreOpen && <Dropdown items={moreItems} />}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center w-full px-4 py-2 text-gray-700 font-semibold hover:text-blue-600"
              >
                <FiUser className="h-5 w-5 mr-2" />
                <span>Preeti</span>
                <FiChevronDown className={`ml-auto h-4 w-4 ${profileOpen ? "rotate-180" : ""}`} />
              </button>
              {profileOpen && <Dropdown items={profileItems} />}
            </div>

            <a href="#" className="flex items-center px-4 py-2 text-gray-700 font-semibold hover:text-blue-600">
              <FiShoppingCart className="h-5 w-5 mr-2" /> Cart
            </a>

            <a href="#" className="block px-4 py-2 text-gray-700 font-semibold hover:text-blue-600">
              Become a Seller
            </a>

            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center w-full px-4 py-2 text-gray-700 font-semibold hover:text-blue-600"
              >
                <FiMoreVertical className="h-5 w-5 mr-2" />
                <span>More</span>
                <FiChevronDown className={`ml-auto h-4 w-4 ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && <Dropdown items={moreItems} />}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
