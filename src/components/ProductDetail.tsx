
import React, { useState } from "react";

interface ProductDetailProps {
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  weight: string;
  images: string[];
}

const ProductDetail: React.FC<{ product: ProductDetailProps }> = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
      {/* Left Side */}
      <div>
        <img src={selectedImg} alt={product.nameEn} className="w-full h-[400px] object-cover rounded-xl shadow" />
        <div className="flex gap-4 mt-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumb"
              onClick={() => setSelectedImg(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                selectedImg === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{product.nameUr}</h2>
        <p className="text-gray-500">{product.nameEn}</p>

        <div className="flex items-center gap-2 text-yellow-500">
          {"★".repeat(Math.floor(product.rating))} 
          <span className="text-gray-600 text-sm">({product.reviews} Reviews)</span>
        </div>

        <div className="flex gap-3 items-center">
          <span className="text-red-600 text-xl font-bold">Rs. {product.price}</span>
          <span className="line-through text-gray-400">was {product.oldPrice}</span>
          <span className="bg-green-100 text-green-600 px-2 py-1 text-sm rounded-lg">
            {product.discount}
          </span>
        </div>

        <p className="text-sm">Weight: <span className="font-semibold">{product.weight}</span></p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-4">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >-</button>
          <span className="text-lg">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >+</button>
        </div>

        {/* Add to Cart */}
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;





// "use client";
// import  { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";

// import "swiper/swiper-bundle.css";

// type Product = {
//   id: number;
//   nameEn: string;
//   nameUr: string;
//   price: number;
//   oldPrice: number;
//   discount: string;
//   rating: number;
//   reviews: number;
//   weight: string;
//   images: string[];
// };

// interface ProductDetailProps {
//   product: Product;
// }

// export default function ProductDetail({ product }: ProductDetailProps) {
//   useEffect(() => {
//     const swiperEl = document.querySelector(".product-swiper") as any;
//     if (swiperEl && swiperEl.swiper) {
//       swiperEl.swiper.params.navigation.prevEl = ".custom-prev";
//       swiperEl.swiper.params.navigation.nextEl = ".custom-next";
//       swiperEl.swiper.navigation.init();
//       swiperEl.swiper.navigation.update();
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-xl mx-auto">
//       {/* Main Swiper */}
//       <Swiper
//         modules={[Navigation, Thumbs]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation={{
//           prevEl: ".custom-prev",
//           nextEl: ".custom-next",
//         }}
//         className="product-swiper rounded-lg overflow-hidden"
//       >
//         {product.images.map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <img src={img} alt={`${product.nameEn} ${idx}`} className="w-full" />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnails */}
//       <div className="grid grid-cols-4 gap-2 mt-4">
//         {product.images.map((img, idx) => (
//           <img
//             key={idx}
//             src={img}
//             alt={`Thumb ${idx}`}
//             className="w-full rounded border"
//           />
//         ))}
//       </div>

//       {/* Arrows below */}
//       <div className="flex justify-center items-center gap-6 mt-4">
//         <button className="custom-prev bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-800">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
//             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button className="custom-next bg-black text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-800">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
//             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }



