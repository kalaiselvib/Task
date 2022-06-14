/** @format */

import React, { useState } from "react";
import { dataCollection } from "./SubCategoryItems";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai"
function SubCategoryDetail() {
  const [data, getData] = useState(dataCollection);

  return (
    <>
      <h3 className="sub-text">SUB CATEGORY NAME</h3>
       <div className="food-container">
      {data.map((item, index) => {
        return (
          <div className="food-item" key={index}>
            <img   src={require(`../assets/images/${item.imgUrl}`)} alt="food-picture"/>
            <div className="food-item-name">
            {item.choice ? <h3 className="padding">{item.itemName}</h3> : <h3 className="cdn-padding">{item.itemName}</h3>} 
            {item.choice && <div className="choice-val">{item.choice}</div>}
            </div>
           
            <div className="food-description">{item.description}</div>
            <h3 className="price"> ${item.price.toFixed(2)}</h3>
            {item["btn-text"] ? (
                    <button className="primary-btn">{item["btn-text"]}</button>
                  ) : (
                   <div className="cart-total">
                   <>
                   <span className="action delete-action"> <AiOutlineMinus/> </span>
                    <span className="item-count">99</span>
                    <span className="action add-action"> <AiOutlinePlus/> </span>
                   </>
                   <button className="dark-btn">Done</button>
                   </div>
                  )}
          </div>
        );
      })}
    </div>
    </>
 
  );
}

export default SubCategoryDetail;
