


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
//       className="cursor-pointer w-full"
//       onClick={onClick}
//     >
//       {/* Image Section */}
//       <div className="relative w-full">
//         <img 
//           src={product.images[0]} 
//           alt={product.nameEn} 
//           className="w-full h-auto block" // full width, no border-radius
//         />
//         {/* Discount Button */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//           <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow">
//             {product.discount}
//           </span>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="mt-2 w-full flex flex-col gap-1">
//         {/* Top row: 'was:', Urdu text, old price */}
//         <div className="flex items-center justify-between">
//           <span className="text-gray-400 text-sm flex-shrink-0">was:</span>
//           <p className="font-arabic text-[22px] font-bold flex-1 text-center">{product.nameUr}</p>
//           <span className="text-gray-400 line-through text-sm flex-shrink-0">Rs. {product.oldPrice}</span>
//         </div>
//         {/* Bottom row: English name & new price */}
//         <div className="flex items-center justify-between mt-1">
//           <p className="font-poppins text-[16px] font-bold">{product.nameEn}</p>
//           <span className="font-bold">Rs. {product.price}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;














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
//       className="cursor-pointer w-full"
//       onClick={onClick}
//     >
//       {/* Image Section */}
//       <div className="relative w-full">
//         <img 
//           src={product.images[0]} 
//           alt={product.nameEn} 
//           className="w-full h-auto block" // full width, no border-radius
//         />
//         {/* Discount Button */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//           <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow">
//             {product.discount}
//           </span>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="mt-2 w-full flex flex-col gap-1">
//         {/* Top row: old price */}
//         <div className="flex justify-start items-center">
//           <span className="text-gray-400 text-sm  line-through">was: Rs. {product.oldPrice}</span>
//         </div>

//         {/* Middle row: Urdu text left, new price right */}
//         <div className="flex justify-between items-center mt-1">
//           <p className="font-arabic text-[22px] font-bold">{product.nameUr}</p>
//           <span className=" font-bold text-sm">Rs. {product.price}</span>
//         </div>

//         {/* Bottom row: English name */}
//         <div className="mt-1">
//           <p className="font-poppins text-[16px] font-bold">{product.nameEn}</p>
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
      className="cursor-pointer w-full"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative w-full">
        <img 
          src={product.images[0]} 
          alt={product.nameEn} 
          className="w-full h-auto block" // full width, no border-radius
        />
        {/* Discount Button */}
        <div className="absolute bottom-[26px] left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow">
            {product.discount}
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-2 w-full flex flex-col gap-1">

        <div className="flex justify-between items-start mt-1">

          <p className="font-arabic text-[22px] leading-[26px] font-bold">{product.nameUr}</p>

          {/* Right: Old price on top, new price below */}
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-[12px] line-through font-semibold">was: Rs. {product.oldPrice}</span>
            <span className=" font-semibold text-[16px]">Rs. {product.price}</span>
          </div>
        </div>

        {/* Bottom row: English name */}
        <div>
          <p className="font-poppins text-[16px] font-semibold">{product.nameEn}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
