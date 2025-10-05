



// const Honey = () => {
//   return (
//     <div className="w-full flex justify-center py-12">
//       <div
//         className="relative w-[1175px] h-[269px] rounded-[40px] flex items-center justify-between px-[52px] bg-center bg-cover overflow-hidden"
//         style={{
//           backgroundImage: "url('/bg-image.jpg')", 
//         }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black/70 rounded-2xl" />

//         {/* Content Wrapper */}
//         <div className="relative z-10 flex flex-col gap-6 text-white  font-poppins">
//           <h2 className="font-bold text-[32px] leading-tight">
//             Pure Honey, Crafted by Nature, Shared with Love
//           </h2>
//           <p className="text-[16px] leading-relaxed capitalize max-w-[720px]">
//             At Al Baraka Honey, we believe honey should be just as nature
//             intended — raw, pure, and full of life. Every jar is a reflection of
//             our dedication to authenticity, sustainability, and care for the bees
//             that make it possible. By choosing us, you’re not just enjoying honey,
//             you’re supporting healthier communities and a thriving ecosystem.
//           </p>
//         </div>

//         {/* Right side CTA button */}
//         <div className="relative z-10">
//           <button className="bg-white font-semibold rounded-[30px] px-[30px] py-[13px] cursor-pointer hover:bg-amber-100 transition font-poppins">
//             Try it Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Honey;




// const Honey = () => {
//   return (
//     <div className="w-full flex justify-center py-8 md:py-12 px-4 md:px-0">
//       <div
//         className="relative w-full max-w-[1175px] h-auto md:h-[269px] rounded-[30px] md:rounded-[40px] flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-6 md:gap-0 px-6 md:px-[52px] bg-center bg-cover overflow-hidden"
//         style={{
//           backgroundImage: "url('/bg-image.jpg')",
//         }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black/70 rounded-[30px] md:rounded-[40px]" />

//         {/* Content Wrapper */}
//         <div className="relative z-10 flex flex-col gap-4 md:gap-6 text-white font-poppins text-center md:text-left max-w-full ">
//           <h2 className="font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-snug md:leading-tight md:max-w-[740px]">
//             Pure Honey, Crafted by Nature, Shared with Love
//           </h2>
//           <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed capitalize md:max-w-[750px]">
//             At Al Baraka Honey, we believe honey should be just as nature
//             intended — raw, pure, and full of life. Every jar is a reflection of
//             our dedication to authenticity, sustainability, and care for the bees
//             that make it possible. By choosing us, you’re not just enjoying honey,
//             you’re supporting healthier communities and a thriving ecosystem.
//           </p>
//         </div>

//         {/* Right side CTA button */}
//         <div className="relative z-10 mt-4 md:mt-0">
//           <button className="bg-white text-[#302A25] font-semibold rounded-[30px] px-6 py-3 md:px-[30px] md:py-[13px] text-[14px] md:text-[16px] cursor-pointer hover:bg-amber-100 transition font-poppins">
//             Try it Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Honey;











const Honey = () => {
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
          <h2 className="font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-snug md:leading-tight md:max-w-[740px]">
            Pure Honey, Crafted by Nature, Shared with Love
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed capitalize md:max-w-[750px]">
            At Al Baraka Honey, we believe honey should be just as nature
            intended — raw, pure, and full of life. Every jar is a reflection of
            our dedication to authenticity, sustainability, and care for the bees
            that make it possible. By choosing us, you’re not just enjoying honey,
            you’re supporting healthier communities and a thriving ecosystem.
          </p>
        </div>

        {/* Right side CTA button */}
        <div className="relative z-10 mt-4 md:mt-0">
          <button className="bg-white text-[#302A25] font-semibold rounded-[30px] px-6 py-3 md:px-[30px] md:py-[13px] text-[14px] md:text-[16px] cursor-pointer hover:bg-amber-100 transition font-poppins">
            Try it Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Honey;
