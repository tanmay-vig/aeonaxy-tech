import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="text-xl font-bold mb-4">My App</div>
      <ul>
        <li className="mb-2">
          <a href="/" className="text-gray-800 hover:text-gray-900">
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="/home" className="text-gray-800 hover:text-gray-900">
            Users
          </a>
        </li>
        <li className="mb-2">
          <a href="/h" className="text-gray-800 hover:text-gray-900">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;