import React from 'react'
import { HomeItems } from './HomeItems'

export const Home = ({showAlert}) => {
    const item = [
        {
            "id": "01",
            "laptop_name": "APPLE MacBook Pro",
            "image": "images/apple-macbook-pro-a1989-500x500.webp",
            "specifications": "Specifications: Intel Core i9 9th Gen, 16 GB/512 SSD/Mac OS /4 GB Graphics, 1920x1080",
            "features": "Features: Touch Bar, Four Thunderbolt , Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 79000,
            "current_price": 74000,
            //"discount_percentage": 35
        },
        {
            "id": "005",
            "laptop_name": "Dell E7450",
            "image": "images/e7450.jpg",
            "specifications": "Specifications: Intel Core i7, 5th Gen, 8GB RAM, 256GB SSD, 14 inches, 1920x1080",
            "features": "Features: Backlit Keyboard, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 22500.99,
            "current_price": 17625.99,
            //"discount_percentage": 35
        },
        {
            "id": "002",
            "laptop_name": "HP 830 G6",
            "image": "images/img2.webp",
            "specifications": "Specifications: i5 8th Gen, 8GB RAM, 256GB SSD, 13.5 inches, 2560x1440",
            "features": "Features: Thin and Lightweight, Powerful Graphics",
            "brand": "Brand: HP",
            "rating": {
                "stars": 4.2,
                "count": 80
            },
            //"original_price": 28558.99,
            "current_price": 23800.99,
            //"discount_percentage": 31
        },
        {
            "id": "003",
            "laptop_name": "DELL E5420",
            "image": "images/img5.png",
            "specifications": "Specifications: Intel Core i5 11th gen, 16GB RAM, 512 GB SSD, 14 inches, 3840x2160",
            "features": "Features: NanoEdge Display, Harman Kardon Audio, Gaming Graphics",
            "brand": "Brand: DELL",
            "rating": {
                "stars": 4.7,
                "count": 200
            },
            "original_price": 42240.99,
            "current_price": 35950.99,
            "discount_percentage": 15
        },
        {
            "id": "004",
            "laptop_name": "Dell E7400 ",
            "image": "images/img1.png",
            "specifications": "Specifications: Intel Core i7 8th gen , 16 GB RAM, 512 GB SSD, 14 inches Black  , 1920x1080",
            "features": "Features: Backlit Keyboard, Fingerprint Sensor, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 30900.99,
            "current_price": 27190.99,
            "discount_percentage": 12
        },
        {
            "id": "001",
            "laptop_name": "Dell 5400",
            "image": "images/img1.png",
            "specifications": "Specifications: Intel Core i5, 8GB RAM, 256GB SSD, 14 inch Touch Screen, 1920x1080",
            "features": "Features: Backlit Keyboard, Fingerprint Sensor, Long Battery Life",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.5,
                "count": 120
            },
            "original_price": 26000,
            "current_price": 22000,
            //"discount_percentage": 35
        },
        {
            "id": "006",
            "laptop_name": "Dell 7490",
            "image": "https://m.media-amazon.com/images/I/81WX6nVs8TL._AC_UF1000,1000_QL80_.jpg",
            "specifications": "Specifications: Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, 14 inch  , 1920x1080",
            "features": "Features: Non Touch Full HD Display,  Audio, Backlit Keyboard",
            "brand": "Brand: Dell",
            "rating": {
                "stars": 4.0,
                "count": 50
            },
            "original_price": 25000,
            "current_price": 21500,
            //"discount_percentage": 27
        },
        {
            "id": "007",
            "laptop_name": "HP ELITEBOOK X360 1030 G4",
            "image": "https://m.media-amazon.com/images/I/41mC0liN4lL._SX679_.jpg",
            "specifications": "Specifications: Intel CORE I7 8TH/16GB/512GB SSD/WEBCAM/13.3 Touch",
            "features": "Features: Full HD Display, Acer TrueHarmony Audio, Backlit Keyboard",
            "brand": "Brand: HP",
            "rating": {
                "stars": 4.0,
                "count": 50
            },
            "original_price": 38000,
            "current_price": 35000,
            //"discount_percentage": 27
        },
        // {
        //     "id": "008",
        //     "laptop_name": "Dell 7490",
        //     "image": "https://m.media-amazon.com/images/I/81WX6nVs8TL._AC_UF1000,1000_QL80_.jpg",
        //     "specifications": "Specifications: Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, 14 inch  , 1920x1080",
        //     "features": "Features: Touch Screen Full HD Display,  Audio, Backlit Keyboard",
        //     "brand": "Brand: Dell",
        //     "rating": {
        //         "stars": 4.0,
        //         "count": 50
        //     },
        //     "original_price": 29000,
        //     "current_price": 27500,
        //     //"discount_percentage": 27
        // },
        // {
        //     "id": "009",
        //     "laptop_name": "Dell 7490",
        //     "image": "https://m.media-amazon.com/images/I/81WX6nVs8TL._AC_UF1000,1000_QL80_.jpg",
        //     "specifications": "Specifications: Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, 14 inch  , 1920x1080",
        //     "features": "Features: Non Touch Full HD Display,  Audio, Backlit Keyboard",
        //     "brand": "Brand: Dell",
        //     "rating": {
        //         "stars": 4.0,
        //         "count": 50
        //     },
        //     "original_price": 23000,
        //     "current_price": 20500,
        //     //"discount_percentage": 27
        // },
        // {
        //     "id": "010",
        //     "laptop_name": "Dell 7490",
        //     "image": "https://m.media-amazon.com/images/I/81WX6nVs8TL._AC_UF1000,1000_QL80_.jpg",
        //     "specifications": "Specifications: Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, 14 inch  , 1920x1080",
        //     "features": "Features: Non Touch Full HD Display,  Audio, Backlit Keyboard",
        //     "brand": "Brand: Dell",
        //     "rating": {
        //         "stars": 4.0,
        //         "count": 50
        //     },
        //     "original_price": 23000,
        //     "current_price": 20500,
        //     //"discount_percentage": 27
        // },
        // {
        //     "id": "011",
        //     "laptop_name": "Dell 7490",
        //     "image": "https://m.media-amazon.com/images/I/81WX6nVs8TL._AC_UF1000,1000_QL80_.jpg",
        //     "specifications": "Specifications: Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, 14 inch  , 1920x1080",
        //     "features": "Features: Non Touch Full HD Display,  Audio, Backlit Keyboard",
        //     "brand": "Brand: Dell",
        //     "rating": {
        //         "stars": 4.0,
        //         "count": 50
        //     },
        //     "original_price": 23000,
        //     "current_price": 20500,
        //     //"discount_percentage": 27
        // },
    ]
  return (
    <><img className='homeJpg' src="images/Blacktwo2.jpg" alt="" />
    <div className='homeItem f-color'>
    {item.map(item=> <HomeItems showAlert={showAlert} key={item.id} item={item}/>)}
    </div>
    </>
  )
}
