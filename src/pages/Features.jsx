import React from 'react'
import { HiOutlineSpeakerphone } from "react-icons/hi";
function Features() {
    const features = [
        {
          title: "10% Off for Delivery",
          caption: "Enjoy 10% for your 1st purchase",
          selected : false
        },
        {
          title: "10% Off for Takeaway",
          caption: "Enjoy 10% for your 1st purchase",
          selected : true
        },
        {
          title: "$25 Off for Dine In",
          caption: "Enjoy 10% for your 1st purchase",
          selected : false
        },
      ];

  return (
    <div className="features-container">
    {features.map((item, index) => {
      return (
        <div className={`${item.selected ? "feature-item active" : "feature-item"}`}>
          <div className="icon-circle">
            <HiOutlineSpeakerphone className="icon" />
          </div>
          <div className="feature-text">
            <p className="title-text">{item.title}</p>
            <p className="caption-text">{item.caption}</p>
          </div>
          <div className={`${item.selected ? "selected-circle active" : "selected-circle"}`}></div>
        </div>
      );
    })}
  </div>
  )
}

export default Features