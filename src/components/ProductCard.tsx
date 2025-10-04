

// import React from "react";

// interface ProductProps {
//   id: number;
//   nameEn: string;
//   nameUr: string;
//   price: number;
//   oldPrice: number;
//   discount: string;
//   images: string[];
// }

// const ProductCard: React.FC<{ product: ProductProps; onClick: () => void }> = ({ product, onClick }) => {
//   return (
//     <div 
//       className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-xl transition"
//       onClick={onClick}
//     >
//       <div className="relative">
//         <img src={product.images[0]} alt={product.nameEn} className="w-full h-64 object-cover rounded-xl" />
//         <span className="absolute bottom-2 left-2 bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
//           Sale {product.discount}
//         </span>
//       </div>
//       <div className="mt-3 text-center">
//         <p className="text-lg font-bold">{product.nameUr}</p>
//         <p className="text-sm text-gray-500">{product.nameEn}</p>
//         <div className="mt-2 flex justify-center gap-2 items-center">
//           <span className="text-red-600 font-bold">Rs. {product.price}</span>
//           <span className="line-through text-gray-400 text-sm">was {product.oldPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




import React from "react";

interface ProductProps {
  id: number;
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice: number;
  discount: string;
  images: string[];
}

const ProductCard: React.FC<{ product: ProductProps; onClick: () => void }> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <div className="relative">
        <img src={product.images[0]} alt={product.nameEn} className="w-full h-64 object-cover rounded-xl" />
        <span className="absolute bottom-2 left-2 bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
          Sale {product.discount}
        </span>
      </div>
      <div className="mt-3 text-center">
        <p className="text-lg font-bold">{product.nameUr}</p>
        <p className="text-sm text-gray-500">{product.nameEn}</p>
        <div className="mt-2 flex justify-center gap-2 items-center">
          <span className="text-red-600 font-bold">Rs. {product.price}</span>
          <span className="line-through text-gray-400 text-sm">was {product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
