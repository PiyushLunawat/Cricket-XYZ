import React, { useState } from "react";

// Tabs Component
const Tabs = ({ children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  // Handle tab click and set active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="">
      <div className=" bg-green-500 text-black w-fit px-2 py-[2px]">
        {children.map((child, index) => (
          <button
            key={index}
            className={` px-2 ${
              activeTab === index ? "bg-black text-green-500 " : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div className=" text-white  mt-4">
        {children[activeTab]}
      </div>
    </div>
  );
};

// TabsContent Component
const TabsContent = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};

// Exporting Components
export { Tabs, TabsContent };
