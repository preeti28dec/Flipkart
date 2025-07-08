import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';

const menuData = [
  {
    id: 1,
    title: "Minutes",
    image: "/category/minutes.webp",
  },
  {
    id: 2,
    title: "Mobiles & Tablets",
    image: "/category/Mobiles.webp",
  },
  {
    id: 3,
    title: "Fashion",
    image: "/category/Fashion.webp",
    subCategories: [
      {
        name: "Men's Top Wear",
        items: [
          "All",
          "Men's T-Shirts",
          "Men's Casual Shirts",
          "Men's Formal Shirts",
          "Men's Kurtas",
          "Men's Ethnic Sets",
          "Men's Blazers",
          "Men's Raincoat",
          "Men's Windcheaters",
          "Men's Suit",
          "Men's Fabrics",
        ],
      },
      { name: "Men's Bottom Wear", items: [] },
      { name: "Women Ethnic", items: [] },
      { name: "Men Footwear", items: [] },
      { name: "Women Footwear", items: [] },
      { name: "Watches and Accessories", items: [] },
      { name: "Women Western", items: [] },
      { name: "Bags, Suitcases & Luggage", items: [] },
      { name: "Kids", items: [] },
      { name: "Essentials", items: [] },
      { name: "Winter", items: [] },
    ],
  },
  {
    id: 4,
    title: "Electronics",
    image: "/category/Electronics.webp",
    subCategories: [
      {
        name: "Audio",
        items: [
          "All",
          "Bluetooth Headphones",
          "Wired Headphones",
          "True Wireless Earbuds",
          "Bluetooth Speakers",
          "Soundbars",
          "Home Theatres",
          "TV Streaming Device",
          "Remote Control",
          "DTH Set top box",
          "Headphones Pouch & Case Covers",
        ],
      },
      { name: "Electronics GST Store", items: [] },
      { name: "Cameras & Accessories", items: [] },
      { name: "Computer Peripherals", items: [] },
      { name: "Gaming", items: [] },
      { name: "Health & Personal Care", items: [] },
      { name: "Laptop Accessories", items: [] },
      { name: "Laptop and Desktop", items: [] },
      { name: "MobileAccessory", items: [] },
      { name: "Powerbank", items: [] },
      { name: "Smart Home automation", items: [] },
      { name: "Smart Wearables", items: [] },
    ],
  },
  {
    id: 5,
    title: "Home & Furniture",
    image: "/category/Furniture.webp",
    subCategories: [
      {
        name: "Home Furnishings",
        items: [
          "All",
          "Bed Linens",
          "Bedsheets",
          "Blankets",
          "Curtains & Accessories",
          "Bath Linen",
          "Floor coverings",
          "Covers & protectors",
          "Cushions & Pillows",
          "Kitchen Linen Sets",
          "Table Linen Sets",
          "Sofa & curtain fabrics",
        ],
      },
      { name: "Furniture", items: [] },
      { name: "Living Room Furniture", items: [] },
      { name: "Kitchen & Dining", items: [] },
      { name: "Bedroom Furniture", items: [] },
      { name: "Space Saving Furniture", items: [] },
      { name: "Home Decor", items: [] },
      { name: "Tools & Utility", items: [] },
      { name: "Work Space Furniture", items: [] },
      { name: "Kids Furniture", items: [] },
      { name: "Lightings & Electricals", items: [] },
      { name: "Cleaning & Bath", items: [] },
    ],
  },
  {
    id: 6,
    title: "TVs & Appliances",
    image: "/category/Applications.webp",
  },
  {
    id: 7,
    title: "Flight Bookings",
    image: "/category/flight.webp",
  },
  {
    id: 8,
    title: "Beauty, Food",
    image: "/category/taddy.webp",
    subCategories: [
      {
        name: "Beauty & Personal Care",
        items: [
          "View All",
          "Bath & Oral Care",
          "Personal Hygiene",
          "Eye Makeup",
          "Face Makeup",
          "Lip Makeup",
          "Hair Care",
          "Bath Essentials",
          "Women's Personal Hygiene",
          "Body & Skin Care",
          "Top Brand Deals",
        ],
      },
      { name: "Men's Grooming", items: [] },
      { name: "Food & Drinks", items: [] },
      { name: "Nutrition & Health Care", items: [] },
      { name: "Baby Care", items: [] },
      { name: "Toys & School Supplies", items: [] },
      { name: "Sports & Fitness", items: [] },
      { name: "Books", items: [] },
      { name: "Music", items: [] },
      { name: "Stationery & Office Supplies", items: [] },
      { name: "Auto Accessories", items: [] },
      { name: "Safety & Hygiene Essentials", items: [] },
    ],
  },
  {
    id: 9,
    title: "Grocery",
    image: "/category/Grocery.webp",
  },
];

const CategoryCarousel = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleMouseEnter = (title) => {
    setActiveMenu(title);
    setActiveSubCategory(null);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubCategory(null);
  };

  const currentMenu = menuData.find((m) => m.title === activeMenu);
  const currentSubCategory = currentMenu?.subCategories?.find(
    (s) => s.name === activeSubCategory
  );

  return (
    <div
      className="mx-6 relative z-50 bg-white py-4 shadow rounded"
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex flex-wrap md:flex-nowrap md:gap-6 px-4 justify-between w-[85%] mx-auto">
        {menuData.map((menu) => (
          <li
            key={menu.id}
            onMouseEnter={() => handleMouseEnter(menu.title)}
            className="relative cursor-pointer text-xs sm:text-sm font-medium hover:text-blue-600"
          >
            <div className="flex flex-col justify-center items-center">
              <Image src={menu.image} alt={menu.title} className=" mb-1" width={70} height={70} />
              <div className="flex items-center">
                <div>{menu.title}</div>
                {menu.subCategories && (
                  <FiChevronDown className="text-gray-400 text-xs" />
                )}
              </div>
            </div>

            {activeMenu === menu.title && menu.subCategories && (
              <div className="absolute left-0 top-full mt-2 w-full max-w-[90vw] md:w-[600px] bg-white shadow border rounded z-10 flex flex-col md:flex-row">
                {/* Left Column - Subcategories */}
                <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r p-3">
                  {menu.subCategories.map((sub) => (
                    <div
                      key={sub.name}
                      onMouseEnter={() => setActiveSubCategory(sub.name)}
                      className={`flex justify-between px-2 py-1 cursor-pointer hover:bg-gray-100 ${
                        activeSubCategory === sub.name
                          ? "bg-gray-100 font-semibold"
                          : ""
                      }`}
                    >
                      {sub.name}
                      {sub.items.length > 0 && (
                        <span className="text-xs text-gray-400">&gt;</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Column - Items */}
                <div className="w-full md:w-1/2 p-3">
                  {currentSubCategory?.items?.length > 0 &&
                    currentSubCategory.items.map((item) => (
                      <div
                        key={item}
                        className="text-sm text-gray-700 hover:text-blue-600 py-1"
                      >
                        {item}
                      </div>
                    ))}
                  <div className="mt-3 text-xs text-gray-500 border-t pt-2">
                    More in {menu.title}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCarousel;
