
// // src/pages/home/sections/Shop.tsx

// import products from "../../../products.json"; 
// import ProductCard from "../../../components/ProductCard";

// const Shop = () => {
//   return (
//     <section className="w-full py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Shop</h2>

//         {/* Grid with 3 products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(0, 3).map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onClick={() => console.log("Clicked product:", product.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shop;




// // src/pages/home/sections/Shop.tsx
// import  { useState } from "react";
// import products from "../../../products.json"; // adjust path
// import ProductCard from "../../../components/ProductCard";
// import ProductDetail from "../../../components/ProductDetail";

// const Shop = () => {
//   const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

//   const product = products.find((p) => p.id === selectedProduct);

//   return (
//     <section className="w-full py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Shop</h2>

//         {/* If product is selected → show detail page */}
//         {product ? (
//           <div>
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//             >
//               ← Back to Shop
//             </button>
//             <ProductDetail product={product} />
//           </div>
//         ) : (
//           /* Otherwise show grid */
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {products.slice(0, 3).map((p) => (
//               <ProductCard
//                 key={p.id}
//                 product={p}
//                 onClick={() => setSelectedProduct(p.id)}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Shop;










import  { useState } from "react";
import products from "../products.json"
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Find the product from JSON
  const product = products.find((p) => p.id === selectedProduct);

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop</h2>

        {/* If product is selected → show detail page */}
        {product ? (
          <div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              ← Back to Shop
            </button>
            <ProductDetail product={product} />
          </div>
        ) : (
          /* Otherwise show grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelectedProduct(p.id)} // ✅ sets product instead of console.log
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
