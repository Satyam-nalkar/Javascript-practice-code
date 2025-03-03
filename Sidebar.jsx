import React from 'react';
import img from "../assets/cheflogo.jpg"
const Sidebar = ({ visible }) => {
  const menuItems = [
    { href: 'dashboard.html', label: 'Home' },
    { href: 'settings.html', label: 'Settings' },
    { href: 'users.html', label: 'Users' },
    { href: 'categories.html', label: 'Categories' },
    { href: 'recipes.html', label: 'Recipes' },
    { href: 'ads.html', label: 'Ads' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
        visible ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
    >
      <div className="flex items-center justify-center py-6 border-b border-gray-700">
        <img src={img} alt="Home Chef Hub Logo" className="h-20 w-20 mr-2 transition-transform duration-300" />
        <span className="text-xl font-bold">Home Chef Hub</span>
      </div>
      <ul className="mt-4">
        {menuItems.map((item, index) => (
          <li key={index} className="border-b border-gray-700">
            <a href={item.href} className="block py-4 px-6 hover:bg-gray-700">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
