import React from "react";

const Drawer = ({ isOpen, toggleDrawer, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleDrawer} ></div>
      )}
      <div className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full" } bg-black shadow-lg`} style={{ minHeight: "200px" }} >
        <div className="border-t-8 border-green-500 w-[30vw] mx-auto"></div>
        <div className="mt-4 text-white">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
