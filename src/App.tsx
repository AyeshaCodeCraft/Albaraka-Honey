


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomeWrapper from "./pages/Home/HomeWrapper";
import ContactWrapper from "./pages/Contact/ContactWrapper"
// import About from "./pages/About";
// import Support from "./pages/Support";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/contact" element={<ContactWrapper />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





