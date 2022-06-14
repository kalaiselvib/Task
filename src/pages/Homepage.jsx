/** @format */

import React from "react";

import "../styles/homepage/homepage.scss";
import Banner from "./Banner";
import Features from "./Features";
import SubCategoryDetail from "./SubCategoryDetail";
import {BsChevronDoubleDown} from "react-icons/bs";

function Homepage() {
 
  const categoryItems = [
    {
      name: "starters",
      path: "/",
    },
    {
      name: "soup",
      path: "/soup",
    },
    {
      name: "main dishes",
      path: "/main-dishes",
    },
    {
      name: "",
      path: "",
    },
    {
      name: "",
      path: "",
    },
    {
      name: "",
      path: "",
    },
    {
      name: "check more",
      path: "/check-more",
      isIcon : true, 
      icon : <BsChevronDoubleDown/>,
      expanded : false
    },
  ];


  return (
    <div className="homepage-wrapper">
      <div className="headline-text">
        <h3>Island-wide delivery and Pickup Available</h3>
        <div className="small-text">
          Enjoy flat delivery fee of $3.50 (Minimum order of $35)
        </div>
      </div>
     <Banner/>
      <div className="container">
        <Features/>
        <div className="categories-nav">
          <ul className="menu-items">
            {categoryItems.map((item, index) => {
              return (
                <li className="menu-item" key={index}>
                  {item.name ? (
                    <a href={item.path}>{item.name} {item.isIcon ? <span style={{verticalAlign : "middle" , paddingLeft:"20px"}}>{item.icon}</span> : ""}</a>
                  ) : (
                    <a href={item.path}>Category Name</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <>
          <SubCategoryDetail />
        </>
      </div>
    </div>
  );
}

export default Homepage;
