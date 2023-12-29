import React from 'react'
import { HomeItems } from './HomeItems'

export const Home = ({showAlert}) => {
    const item = [
        {
            "id": "001",
            "laptop_name": "Dell Inspiron 15",
            "image": "images/img1.png",
            "specifications": "Specifications: Intel Core i5, 8GB RAM, 256GB SSD, 15.6 inches, 1920x1080",
            "features": "Features: Backlit Keyboard, Fingerprint Sensor, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 999.99,
            "current_price": 649.99,
            "discount_percentage": 35
        },
        {
            "id": "002",
            "laptop_name": "HP Spectre x360",
            "image": "images/img2.webp",
            "specifications": "Specifications: AMD Ryzen 7, 16GB RAM, 512GB SSD, 14 inches, 2560x1440",
            "features": "Features: Touchscreen, Thin and Lightweight, Powerful Graphics",
            "brand": "Brand: HP",
            "rating": {
                "stars": 4.2,
                "count": 80
            },
            "original_price": 1299.99,
            "current_price": 899.99,
            "discount_percentage": 31
        },
        {
            "id": "003",
            "laptop_name": "Asus ZenBook Pro",
            "image": "images/img5.png",
            "specifications": "Specifications: Intel Core i7, 16GB RAM, 1TB SSD, 15.6 inches, 3840x2160",
            "features": "Features: NanoEdge Display, Harman Kardon Audio, Gaming Graphics",
            "brand": "Brand: Asus",
            "rating": {
                "stars": 4.7,
                "count": 200
            },
            "original_price": 1599.99,
            "current_price": 1149.99,
            "discount_percentage": 28
        },
        {
            "id": "001",
            "laptop_name": "Dell Inspiron 15",
            "image": "images/img1.png",
            "specifications": "Specifications: Intel Core i5, 8GB RAM, 256GB SSD, 15.6 inches, 1920x1080",
            "features": "Features: Backlit Keyboard, Fingerprint Sensor, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 999.99,
            "current_price": 649.99,
            "discount_percentage": 35
        },
        {
            "id": "001",
            "laptop_name": "Dell Inspiron 15",
            "image": "images/img1.png",
            "specifications": "Specifications: Intel Core i5, 8GB RAM, 256GB SSD, 15.6 inches, 1920x1080",
            "features": "Features: Backlit Keyboard, Fingerprint Sensor, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 999.99,
            "current_price": 649.99,
            "discount_percentage": 35
        },
        {
            "id": "004",
            "laptop_name": "Acer Aspire 5",
            "image": "images/img4.png",
            "specifications": "Specifications: Intel Core i5, 8GB RAM, 512GB SSD, 15.6 inches, 1920x1080",
            "features": "Features: Full HD Display, Acer TrueHarmony Audio, Backlit Keyboard",
            "brand": "Brand: Acer",
            "rating": {
                "stars": 4.0,
                "count": 50
            },
            "original_price": 799.99,
            "current_price": 579.99,
            "discount_percentage": 27
        }
    ]
  return (
    <><img className='homeJpg' src="images/Blacktwo2.jpg" alt="" />
    <div className='homeItem f-color'>
    {item.map(item=> <HomeItems showAlert={showAlert} key={item.id} item={item}/>)}
    </div>
    </>
  )
}
