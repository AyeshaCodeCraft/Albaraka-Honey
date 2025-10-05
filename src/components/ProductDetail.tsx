
import React from "react";
import { useCart } from "../context/CartProvider";
import cartIcon from "/cart-icon.png";
import type { ProductDetailProps } from "../types/Product";

const ProductDetail: React.FC<{ product: ProductDetailProps }> = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const handleAddToCart = () => {
    if (cartItem) updateQuantity(product.id, quantity);
    else
      addToCart({
        id: product.id,
        nameEn: product.nameEn,
        nameUr: product.nameUr,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.images[0],
        quantity,
      });
  };

  const incrementQuantity = () => {
    if (cartItem) updateQuantity(product.id, quantity + 1);
    else
      addToCart({
        id: product.id,
        nameEn: product.nameEn,
        nameUr: product.nameUr,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.images[0],
        quantity: 1,
      });
  };

  const decrementQuantity = () => {
    if (cartItem && quantity > 1) updateQuantity(product.id, quantity - 1);
  };

  return (
    <div className="max-w-[1157px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-[70px] font-poppins px-4 md:px-0">
      {/* LEFT */}
      <div className="w-full">
        <div className="relative w-full flex justify-center items-center">
          <img src={product.images[0]} alt={product.nameEn} className="max-h-[480px] object-contain" />
          <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2">
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow">{product.discount}</span>
          </div>
        </div>
        <div className="flex gap-4 mt-6 justify-center">
          {product.images.map((img, idx) => (
            <div key={idx} className="w-20 h-20 flex items-center justify-center border-2 rounded-lg cursor-pointer">
              <img src={img} alt="thumb" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-5 pt-[30px] md:pt-[50px]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-normal text-[14px] tracking-wide">100% Purity Guaranteed</span>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="font-semibold text-[14px]">{product.rating} ({product.reviewsCount} Reviews)</span>
          </div>
        </div>

        <h2 className="text-[28px] md:text-[40px] font-bold font-arabic leading-snug">{product.nameUr}</h2>
        <p className="text-[18px] md:text-[20px]">{product.nameEn}</p>

        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span className="text-black text-[16px] md:text-[18px] font-semibold">Price:</span>
          <span className="text-gray-400 text-sm line-through">Rs. {product.oldPrice}</span>
          <span className="text-[18px] md:text-[20px] font-bold">Rs. {product.price}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
          <span className="text-black text-[16px] md:text-[18px] font-semibold">Weight:</span>
          <button className="bg-[#302A25] px-[24px] md:px-[32px] py-[6px] cursor-pointer rounded-full text-[#FFFFFF] text-[14px] font-medium">{product.weight}</button>
        </div>

        <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">
          <div className="flex items-center bg-[#F0F0F0] rounded-[40px] cursor-pointer px-3 py-2 w-fit">
            <button onClick={decrementQuantity} className="px-3 py-1 text-lg">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={incrementQuantity} className="px-3 py-1 text-lg">+</button>
          </div>

          <button onClick={handleAddToCart} className="flex items-center justify-center gap-2 bg-[#302A25] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex-1 md:flex-none">
            <img src={cartIcon} alt="cart" className="w-5 h-5" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
