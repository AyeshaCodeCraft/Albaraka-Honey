


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import HomeWrapper from "./pages/Home/HomeWrapper";
// import ContactWrapper from "./pages/Contact/ContactWrapper"
// import ShopWrapper from "./pages/Shop/ShopWrapper";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import ProductSelectionWrapper from "./ProductSelection/ProductSelectionWrapper";


// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<HomeWrapper />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/shop" element={<ShopWrapper />} />
//         <Route path="/contact-us" element={<ContactWrapper />} />
//         <Route path="/product/:id" element={<ProductSelectionWrapper />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import { CartProvider } from "./context/CartProvider";

// Pages
import HomeWrapper from "./pages/Home/HomeWrapper";
import ContactWrapper from "./pages/Contact/ContactWrapper";
import ShopWrapper from "./pages/Shop/ShopWrapper";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProductSelectionWrapper from "./ProductSelection/ProductSelectionWrapper";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar now inside CartProvider */}
      
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<ShopWrapper />} />
          <Route path="/contact-us" element={<ContactWrapper />} />
          <Route path="/product/:id" element={<ProductSelectionWrapper />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

