import React from "react";

// Importing Components here
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      {/* Header  */}
      <Header />
      {/* Sidebar */}
      <div className="flex">
        <div  className=" basis-1/4">
          <Sidebar />
        </div>
        <div className=" basis-3/4">
          <Content />
        </div>
      </div>
    </>
  );
};

export default App;
