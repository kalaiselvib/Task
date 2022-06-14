/** @format */

import React, {useState} from "react";
import "../styles/navbar/navbar.scss";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Navbar({ navItems }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className="header">
      <div className="container">
        <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" height={30} />
        </div>
        <button className="toggle-icon" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          <AiOutlineMenu className="icon"/>
        </button>
        </div>
      
        <div className={
          isNavExpanded ? "menu-wrapper expanded" : "menu-wrapper"
        }>
        <ul className="menu-list">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="login-section">
          <a href="path">Login</a>
          <a href="path">Sign Up</a>
        </div>
        <button className="primary-btn">Order Now</button>
        <div className="action-icons">
         <span><BiSearchAlt /></span> 
         <span>  <HiOutlineShoppingBag /></span>
        
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
