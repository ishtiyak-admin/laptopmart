import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomeItems = ({ item ,showAlert}) => {
  const navigate  = useNavigate()
  
  const handleAlert = () => {
    navigate(`/product/${item?.id}`)
}
  return (


    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name" style={{ color: "white" }} >{item.laptop_name}</div>
      <div className="item-name" style={{ color: "white" }} >{item.specifications}</div>
      <div className="item-name" style={{ color: "white" }} >{item.features}</div>
      <div className="item-name" style={{ color: "white" }} >{item.brand}</div>
      <div className="price">
        <span className="current-price" style={{ color: "white" }}>Rs {item.current_price}</span>
        <span className="original-price" >Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={handleAlert}>BUY NOW</button>
    </div>


  )
}
