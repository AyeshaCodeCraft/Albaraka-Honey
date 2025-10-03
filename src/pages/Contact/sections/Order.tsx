

const Order = () => {
    return (
        <div className="w-full flex justify-center py-8 md:py-12 px-4 md:px-0">
            <div
                className="relative w-full max-w-[1200px] h-auto md:h-[269px] rounded-[30px] md:rounded-[40px] 
        flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between 
        gap-6 md:gap-0 px-6 sm:px-8 md:px-[52px] py-10 md:py-0 
        bg-center bg-cover overflow-hidden"
                style={{
                    backgroundImage: "url('/bg-image.jpg')",
                }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-[30px] md:rounded-[40px]" />

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col gap-4 md:gap-6 text-white font-poppins 
        text-center md:text-left max-w-full">
                    <h2 className="font-bold text-[22px] sm:text-[26px] md:text-[40px] leading-snug md:leading-[50px] md:max-w-[740px]">
                        From Our Company to Your Home. <br />
                        Order Online for Delivery or Pick-Up
                    </h2>
                </div>

                {/* Right side CTA button */}
                <div className="relative z-10 mt-4 md:mt-0">
                    <button className="bg-white text-[#302A25] font-semibold rounded-[30px] px-6 py-3 md:px-[30px] md:py-[13px] text-[14px] md:text-[16px] cursor-pointer hover:bg-amber-100 transition font-poppins">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;













// const Order = () => {
//   return (
//     <div className="w-full flex justify-center py-6 md:py-10 px-4 md:px-0">
//       <div
//         className="relative w-full max-w-[1200px] h-auto md:h-[269px] rounded-[30px] md:rounded-[40px] 
//         flex flex-col md:flex-row items-center justify-between 
//         gap-6 md:gap-0 px-6 sm:px-8 md:px-[52px] py-8 md:py-0 
//         bg-center bg-cover overflow-hidden"
//         style={{
//           backgroundImage: "url('/bg-image.jpg')",
//         }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-[30px] md:rounded-[40px]" />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col gap-4 md:gap-6 text-white text-center md:text-left">
//           <h2 className="font-bold text-[22px] sm:text-[26px] md:text-[40px] leading-snug md:leading-[50px] md:max-w-[740px]">
//             From Our Company to Your Home. <br />
//             Order Online for Delivery or Pick-Up
//           </h2>
//         </div>

//         {/* CTA */}
//         <div className="relative z-10 mt-4 md:mt-0">
//           <button className="bg-white text-[#302A25] font-semibold rounded-[30px] px-6 py-3 md:px-[30px] md:py-[13px] text-[14px] md:text-[16px] cursor-pointer hover:bg-amber-100 transition">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;