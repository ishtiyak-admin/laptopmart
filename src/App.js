import { useState } from "react";
import { Brand } from "./components/Brand";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Alert from "./Alert";

function App() {
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
  );
}

export default App;
