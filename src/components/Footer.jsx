import React from 'react'
import "../styles/footer/footer.scss";
import logo from "../assets/images/logo.png";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsTelephone , BsEnvelope} from "react-icons/bs";
function Footer() {
    const footerItems = [
        {
            icon : <HiOutlineLocationMarker/>,
            name : "Address",
            value : `46 Race Course Rd Singapore 218559`
        },
        {
            icon : <BsTelephone/>,
            name : "Telephone",
            value : "6909 3333"
        },
        {
            icon : <BsEnvelope/>,
            name : "Email",
            value : "email@domain.com"
        }
    ]
  return (
    <footer>
    <img src={logo} alt="logo"/>
    <div className="address-details">
            {footerItems.map((item,index) => {
                return (
                    <div className='footer-item'>
                        <div className="icon-circle">
                            {item.icon}
                        </div>
                        <h4>{item.name}</h4>
                        <p>{item.value}</p>
                    </div>
                )
            })}
    </div>
    </footer>
  )
}

export default Footer