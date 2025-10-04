


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomeWrapper from "./pages/Home/HomeWrapper";
import ContactWrapper from "./pages/Contact/ContactWrapper"
import ShopWrapper from "./pages/Shop/ShopWrapper";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<ShopWrapper />} />
        <Route path="/contact-us" element={<ContactWrapper />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





