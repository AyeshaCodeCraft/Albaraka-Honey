
import React, { useEffect } from "react";
import { useCart } from "../context/CartProvider";
import crossIcon from "/cross.png";
import dustbinIcon from "/dustbin.png";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Disable background scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div
        className={`
          fixed bg-white shadow-lg z-50 flex flex-col
          transition-transform duration-300
          w-full sm:w-1/2 h-[80vh] sm:h-full
          rounded-l-[30px] sm:rounded-l-[30px]
          ${isOpen ? "translate-x-0 translate-y-0" : "translate-x-full sm:translate-x-full translate-y-full sm:translate-y-0"}
          right-0 top-auto bottom-0 sm:top-0 sm:right-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between pl-[20px] pt-[20px] pr-[20px]">
          <h2 className="font-bold text-[28px]">Shopping Cart</h2>
          <img
            src={crossIcon}
            alt="Close"
            className="h-5 w-5 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center flex-1 text-center px-4">
            <p className="font-bold text-[38px]">Your cart is Empty</p>
            <p className="text-[22px] font-normal mt-2">
              Looks like you haven't added anything yet — let's fix that!
            </p>
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-y-auto px-6 py-4">
            <p className="text-[16px] font-poppins mb-3">
              Items in your bag not reserved — check out now to make them yours.
            </p>
            <hr className="border-black mb-[26px]" />

            {cart.map((item) => (
              <div key={item.id} className="flex mb-6">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.nameEn}
                  className="w-[140px] h-[140px] object-cover rounded"
                />

                {/* Product Details */}
                <div className="flex flex-col ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[26px] font-arabic">{item.nameUr}</h3>
                      <p className="text-[14px] font-normal capitalize mt-[5px]">{item.nameEn}</p>
                    </div>
                    <img
                      src={dustbinIcon}
                      alt="Remove"
                      className="h-[32px] w-[33px] cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>

                  {/* Price + Quantity under it */}
                  <div className="mt-[5px]">
                    <p className="text-[16px] font-semibold mb-2">Rs. {item.price}</p>
                    <div className="flex items-center bg-gray-200 rounded-full w-fit px-2">
                      <button
                        className="px-[20px] py-[10px] cursor-pointer"
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <span className="px-2 cursor-pointer">{item.quantity}</span>
                      <button
                        className="px-2 cursor-pointer"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtotal */}
            <div className="flex justify-between font-semibold text-[20px] mb-4">
              <span>Subtotal ({cart.length} items)</span>
              <span>Rs. {subtotal}</span>
            </div>

            <hr className="border-gray-300 mb-[26px]" />
            {/* Buttons in 1 row */}
            <div className="flex gap-3">
              <button className="flex-1 border border-black py-[18px] text-[16px] cursor-poiner rounded-full">
                Shopping Bag
              </button>
              <button className="flex-1 bg-[#302A25] text-white text-[16px] cursor-pointer py-2 rounded-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
