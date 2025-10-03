
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full flex justify-center mt-[84px] font-poppins">
//       <div
//         className="
//           w-full max-w-[1172px] 
//           px-6 py-4 flex items-center justify-between 
//           md:bg-[#F2EEE6] md:rounded-[70px] 
//         "
//       >
//         {/* Logo (clickable) */}
//         <Link to="/" onClick={() => setMenuOpen(false)}>
//           <img
//             src="/logo.png"
//             alt="Albaraka Honey Logo"
//             className="h-8 w-auto md:h-10 cursor-pointer"
//           />
//         </Link>

//         {/* Desktop NavLinks */}
//         <nav className="hidden md:flex space-x-[80px] text-lg font-medium text-[#302A25]">
//           <Link to="/" className="hover:text-amber-700">Home</Link>
//           <Link to="/about" className="hover:text-amber-700">About Us</Link>
//           <Link to="/shop" className="hover:text-amber-700">Shop</Link>
//           <Link to="/contact" className="hover:text-amber-700">Contact</Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           {/* Cart Icon */}
//           <img src="/cart.png" alt="Cart" className="h-6 w-7 cursor-pointer" />

//           {/* Mobile Menu Icon */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden"
//           >
//             <img src="/menu.png" alt="Menu" className="h-[28px] w-[28px]" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 md:hidden">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-6 text-gray-600 text-3xl"
//           >
//             ✕
//           </button>
//           <Link to="/" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>About Us</Link>
//           <Link to="/shop" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Shop</Link>
//           <Link to="/contact" className="hover:text-amber-700" onClick={() => setMenuOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }











// // Navbar.tsx
// import { useState } from "react";
// import { Link } from "react-router-dom";

// interface NavbarProps {
//     insideHero?: boolean; // new prop
// }

// export default function Navbar({ insideHero = false }: NavbarProps) {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header
//             className={`w-full flex justify-center font-poppins ${insideHero ? "pt-[84px] absolute top-0 left-0 z-20" : "mt-[84px]"
//                 }`}
//         >
//             <div
//                 className="
//           w-full max-w-[1172px] 
//           px-6 py-4 flex items-center justify-between 
//           md:bg-[#F2EEE6] md:rounded-[70px] 
//         "
//             >
//                 {/* Logo */}
//                 <Link to="/" onClick={() => setMenuOpen(false)}>
//                     <img
//                         src="/logo.png"
//                         alt="Albaraka Honey Logo"
//                         className="h-8 w-auto md:h-10 cursor-pointer"
//                     />
//                 </Link>

//                 {/* Desktop NavLinks */}
//                 <nav className="hidden md:flex space-x-[80px] text-lg font-medium text-[#302A25]">
//                     <Link to="/" className="hover:text-amber-700">Home</Link>
//                     <Link to="/about" className="hover:text-amber-700">About Us</Link>
//                     <Link to="/shop" className="hover:text-amber-700">Shop</Link>
//                     <Link to="/contact" className="hover:text-amber-700">Contact</Link>
//                 </nav>

//                 <div className="flex items-center space-x-4">
//                     <img src="/cart.png" alt="Cart" className="h-6 w-7 cursor-pointer" />
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden"
//                     >
//                         <img src="/menu.png" alt="Menu" className="h-[28px] w-[28px]" />
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 md:hidden">
//                     <button
//                         onClick={() => setMenuOpen(false)}
//                         className="absolute top-6 right-6 text-gray-600 text-3xl"
//                     >
//                         ✕
//                     </button>
//                     <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Home</Link>
//                     <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">About Us</Link>
//                     <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Shop</Link>
//                     <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Contact</Link>
//                 </div>
//             )}
//         </header>
//     );
// }













import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center  font-poppins relative z-30">
      <div
        className="
          w-full max-w-[1172px] 
          px-6 py-4 flex items-center justify-between 
          md:bg-[#F2EEE6] md:rounded-[70px]
        "
      >
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Albaraka Honey Logo"
            className="h-8 w-auto md:h-10 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-[80px] text-lg font-medium text-[#302A25]">
          <Link to="/" className="hover:text-amber-700">Home</Link>
          <Link to="/about" className="hover:text-amber-700">About Us</Link>
          <Link to="/shop" className="hover:text-amber-700">Shop</Link>
          <Link to="/contact" className="hover:text-amber-700">Contact</Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <img src="/cart.png" alt="Cart" className="h-6 w-7 cursor-pointer" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <img src="/menu.png" alt="Menu" className="h-[28px] w-[28px]" />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-600 text-3xl"
          >
            ✕
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">About Us</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Shop</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
