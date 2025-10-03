




// import Navbar from "./Navbar";

// interface HeroProps {
//   title: string;
//   description?: string;
//   bgImage: string;
//   insideHero?: boolean;
//   centerContent?: boolean;
// }

// const Hero: React.FC<HeroProps> = ({
//   title,
//   description,
//   bgImage,
//   insideHero = true,
//   centerContent = true,
// }) => {
//   return (
//     <div
//       className="relative w-full min-h-[652px] md:min-h-[700px] bg-cover bg-center rounded-b-[50px]"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0 rounded-b-[50px]" />

//       {/* Navbar (always fixed at top of Hero) */}
//       {insideHero && (
//         <div className="relative z-20 top-[84px]">
//           <Navbar />
//         </div>
//       )}

//       {/* Hero content */}
//       <div className="relative z-10 max-w-[1172px] mx-auto px-6 md:px-12">
//         <div
//           className={`flex flex-col 
//             ${centerContent 
//               ? "items-center text-center pt-[160px]" // home page
//               : "items-start text-left pt-[190px]"   // contact page
//             }`}
//         >
//           <h1 className="text-white text-[60px] sm:text-5xl md:text-6xl font-bold leading-snug">
//             {title}
//           </h1>
//           {description && (
//             <p className="mt-4 max-w-2xl text-white text-base sm:text-lg md:text-xl leading-relaxed capitalize">
//               {description}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





















import Navbar from "./Navbar";

interface HeroProps {
  title: string;
  description?: string;
  bgImage: string;
  insideHero?: boolean;
  centerContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  bgImage,
  insideHero = true,
  centerContent = true,
}) => {
  return (
    <div
      className="
        relative w-full 
        h-[480px] sm:h-[550px] md:h-[652px] lg:h-[700px] 
        bg-cover bg-center rounded-b-[40px] md:rounded-b-[50px]
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 rounded-b-[40px] md:rounded-b-[50px]" />

      {/* Navbar (inside Hero) */}
      {insideHero && (
        <div className="relative z-20 top-[60px] md:top-[84px]">
          <Navbar />
        </div>
      )}

      {/* Hero text */}
      <div className="relative z-10 max-w-[1172px] mx-auto px-4 sm:px-6 md:px-12">
        <div
          className={`flex flex-col 
            ${
              centerContent
                ? "items-center text-center pt-[100px] sm:pt-[120px] md:pt-[160px]"
                : "items-start text-left pt-[130px] sm:pt-[150px] md:pt-[190px]"
            }`}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed capitalize">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
