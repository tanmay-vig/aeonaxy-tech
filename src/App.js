import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App!</h1>
        <p className="text-gray-700">
          This is a simple example of a React app with a sidebar, using Tailwind CSS for styling.
        </p>
      </div>
    </div>
  );
};

export default App;