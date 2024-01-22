import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Alert from "../Alert";
import { Home } from "./Home";
import { Brand } from "./Brand";
import Footer from "./Footer";

const Products = () =>{
   
        const [alert, setAlert] = useState(null);

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
            {alert && <Alert alert={alert} />}
            <Home showAlert={showAlert}/>
            <Brand />
            <Footer />
          </div>
    )
}

export default Products