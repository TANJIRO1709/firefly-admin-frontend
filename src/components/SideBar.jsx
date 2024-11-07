import React from "react";
import {
  long_logo,
  dashboard,
  dashboard_active,
  products_active,
  products,
  design_active,
  design,
} from "../assets/icons";

const SideBar = ({active, setActive}) => {

  return <div className="h-[100vh] p-10 text-sm sticky top-0">
    {long_logo}
    <div className="grid grid-col-1 text-[#664772] font-poppins font-medium mt-14 space-y-4">
      <button className={`flex px-4 py-1.5 rounded-lg items-center ${active==='dashboard'? "bg-primary-purple text-white" : "hover:bg-[#F4FBFF]"}`} onClick={() => setActive('dashboard')}> {active==='dashboard'? dashboard_active:dashboard} <p className="mx-3">Dashboard</p></button>
      <button className={`flex px-4 py-1.5 rounded-lg items-center ${active==='product'? "bg-primary-purple text-white" : "hover:bg-[#F4FBFF]"}`} onClick={() => setActive('product')}> {active==='product'? products_active:products} <p className="mx-3">Products</p></button>
      <button className={`flex px-4 py-1.5 rounded-lg items-center ${active==='design'? "bg-primary-purple text-white" : "hover:bg-[#F4FBFF]"}`} onClick={() => setActive('design')}> {active==='design'? design_active:design} <p className="mx-3">Design</p></button>
      </div>
  </div>
};

export default SideBar;
