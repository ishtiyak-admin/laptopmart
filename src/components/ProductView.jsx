import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Alert from "../Alert";
import { Home } from "./Home";
import { Brand } from "./Brand";
import Footer from "./Footer";

const ProductView = () => {
    const [alert, setAlert] = useState(null);

    const products = [
        {
            id: 1,
            name: "Product A",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            name: "Product B",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        // Add more products as needed
    ];

    const showAlert = () => {
        setAlert('Message on Whatsapp');

        // Hide the alert after 1 second
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    return (
        <div className="bg-color">
            <Navbar />
            <div className="container">
                <h2>Product List</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button onClick={() => showAlert(product.name)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {alert && <Alert message={alert} />}
            <Footer />
        </div>
    )
}

export default ProductView