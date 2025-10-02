
// import { Link } from "react-router-dom";

// const LINKS = [
//   { label: "Home", to: "/" },
//   { label: "Support", to: "/support" },
//   { label: "Terms & Condition", to: "/terms" },
//   { label: "Privacy Policy", to: "/privacy" },
// ];

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#F2EEE6] font-poppins">
//       {/* outer 1440 wrapper */}
//       <div className="max-w-[1440px] mx-auto">
//         {/* full divider container but constrain content */}
//         <div className="md:divide-x md:divide-gray-400/40">
//           {/* content stays centered at 1175px */}
//           <div className="max-w-[1175px] mx-auto px-6 py-8 md:py-12">
//             {/* top row on desktop: 3 cols */}
//             <div className="hidden md:flex">
//               {/* LEFT */}
//               <div className="flex-1 flex justify-start pr-8">
//                 <div className="flex flex-col gap-6">
//                   {LINKS.map((l) => (
//                     <Link
//                       key={l.label}
//                       to={l.to}
//                       className="text-[#302A25] font-semibold hover:text-amber-700 text-[20px] md:text-[16px]"
//                     >
//                       {l.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* CENTER */}
//               <div className="flex-1 flex flex-col items-center px-8">
//                 <img src="/logo.png" alt="Logo" className="h-[82px] w-auto" />
//                 <p className="text-[#979797] text-[20px] font-normal mt-[27px] text-center">
//                   Albaraka Honey – <br /> Pure Blessings In Every Drop
//                 </p>
//               </div>

//               {/* RIGHT */}
//               <div className="flex-1 flex flex-col items-end pl-8">
//                 <div className="flex items-center space-x-3">
//                   <img src="/insta.png" alt="Instagram" className="h-[25px] w-[25px] cursor-pointer" />
//                   <span className="w-[5px] h-[5px] rounded-full bg-black/60"></span>
//                   <img src="/fb.png" alt="Facebook" className="h-[25px] w-[25px] cursor-pointer" />
//                   <span className="w-[5px] h-[5px] rounded-full bg-black/60 cursor-pointer"></span>
//                   <img src="/tiktok.png" alt="TikTok" className="h-[25px] w-[25px]" />
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-800 mt-[35px]">
//                   <img src="/call.png" alt="Call" className="h-[28px] w-[32px]" />
//                   <span className="text-[18px] leading font-semibold">+92 304 1980001</span>
//                 </div>
//               </div>
//             </div>

//             {/* MOBILE view: LEFT + RIGHT side-by-side */}
//             <div className="md:hidden flex justify-between items-start">
//               {/* Left links */}
//               <div className="flex flex-col gap-2">
//                 {LINKS.map((l) => (
//                   <Link
//                     key={l.label}
//                     to={l.to}
//                     className="text-gray-800 hover:text-amber-700 text-[15px]"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </div>

//               {/* Right logo + tagline */}
//               <div className="flex flex-col items-center text-center">
//                 <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
//                 <p className="text-gray-600 mt-2 text-[13px]">
//                   Albaraka Honey – Pure Blessings In Every Drop
//                 </p>
//               </div>
//             </div>

//             {/* MOBILE extra section: socials + phone */}
//             <div className="md:hidden border-t border-gray-400/40 mt-6 pt-6">
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
//                   <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
//                   <img src="/fb.png" alt="Facebook" className="h-5 w-5" />
//                   <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
//                   <img src="/tiktok.png" alt="TikTok" className="h-5 w-5" />
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-800">
//                   <img src="/call.png" alt="Call" className="h-4 w-4" />
//                   <span className="text-[15px]">+92 304 1980001</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom divider full width */}
//         <div className="border-t border-[#302A25]-200/30">
//           <p className="py-4 text-center text-[#302A25] text-[20px]">
//             © 2025 Albaraka Honey
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Link } from "react-router-dom";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Support", to: "/support" },
  { label: "Terms & Condition", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2EEE6] font-poppins">
      {/* outer 1440 wrapper */}
      <div className="max-w-[1440px] mx-auto">
        {/* divider full width but content constrained */}
        <div className="relative w-full  border-b border-[#302A25]/20">
          <div className="max-w-[1175px] mx-auto px-6 py-8 md:py-12">
            {/* top row on desktop */}
            <div className="hidden md:flex divide-x divide-[#302A25]/20">
              {/* LEFT */}
              <div className="flex-1 flex justify-start pr-8">
                <div className="flex flex-col gap-6">
                  {LINKS.map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      className="text-[#302A25] font-semibold hover:text-amber-700 text-[20px] md:text-[16px]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CENTER */}
              <div className="flex-1 flex flex-col items-center px-8">
                <img src="/logo.png" alt="Logo" className="h-[82px] w-auto" />
                <p className="text-[#979797] text-[20px] font-normal mt-[27px] text-center">
                  Albaraka Honey – <br /> Pure Blessings In Every Drop
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex-1 flex flex-col items-end pl-8">
                <div className="flex items-center space-x-3">
                  <img src="/insta.png" alt="Instagram" className="h-[25px] w-[25px] cursor-pointer" />
                  <span className="w-[5px] h-[5px] rounded-full bg-black/60"></span>
                  <img src="/fb.png" alt="Facebook" className="h-[25px] w-[25px] cursor-pointer" />
                  <span className="w-[5px] h-[5px] rounded-full bg-black/60"></span>
                  <img src="/tiktok.png" alt="TikTok" className="h-[25px] w-[25px]" />
                </div>
                <div className="flex items-center space-x-2 text-gray-800 mt-[35px]">
                  <img src="/call.png" alt="Call" className="h-[28px] w-[32px]" />
                  <span className="text-[18px] font-semibold">+92 304 1980001</span>
                </div>
              </div>
            </div>

            {/* MOBILE view */}
            <div className="md:hidden flex justify-between items-start">
              <div className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-gray-800 hover:text-amber-700 text-[15px]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col items-center text-center">
                <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
                <p className="text-gray-600 mt-2 text-[13px]">
                  Albaraka Honey – Pure Blessings In Every Drop
                </p>
              </div>
            </div>

            {/* MOBILE extra section */}
            <div className="md:hidden border-t border-[#302A25]/20 mt-6 pt-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
                  <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
                  <img src="/fb.png" alt="Facebook" className="h-5 w-5" />
                  <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
                  <img src="/tiktok.png" alt="TikTok" className="h-5 w-5" />
                </div>
                <div className="flex items-center space-x-2 text-gray-800">
                  <img src="/call.png" alt="Call" className="h-4 w-4" />
                  <span className="text-[15px]">+92 304 1980001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom row – full width with correct color */}
        <div className="border-t border-[#302A25]/20">
          <p className="py-4 text-center text-[#302A25] text-[20px]">
            © 2025 Albaraka Honey
          </p>
        </div>
      </div>
    </footer>
  );
}













// import { Link } from "react-router-dom";

// const LINKS = [
//   { label: "Home", to: "/" },
//   { label: "Support", to: "/support" },
//   { label: "Terms & Condition", to: "/terms" },
//   { label: "Privacy Policy", to: "/privacy" },
// ];

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#F2EEE6] font-poppins">
//       {/* ===== Desktop Layout ===== */}
//       <div className="hidden md:block max-w-[1440px] mx-auto">
//         {/* Full row with dividers */}
//         <div className="flex divide-x divide-[#302A25]/20">
//           {/* LEFT */}
//           <div className="flex-1 flex justify-start">
//             <div className="max-w-[1175px] w-full mx-auto px-8">
//               <div className="flex flex-col gap-6">
//                 {LINKS.map((l) => (
//                   <Link
//                     key={l.label}
//                     to={l.to}
//                     className="text-[#302A25] font-semibold hover:text-amber-700 text-[16px]"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* CENTER */}
//           <div className="flex-1 flex justify-center">
//             <div className="max-w-[1175px] w-full mx-auto px-8 text-center">
//               <img src="/logo.png" alt="Logo" className="h-[82px] w-auto mx-auto" />
//               <p className="text-[#979797] text-[20px] font-normal mt-[27px]">
//                 Albaraka Honey – <br /> Pure Blessings In Every Drop
//               </p>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex-1 flex justify-end">
//             <div className="max-w-[1175px] w-full mx-auto px-8">
//               <div className="flex items-center space-x-3">
//                 <img src="/insta.png" alt="Instagram" className="h-[25px] w-[25px]" />
//                 <span className="w-[5px] h-[5px] rounded-full bg-black/60"></span>
//                 <img src="/fb.png" alt="Facebook" className="h-[25px] w-[25px]" />
//                 <span className="w-[5px] h-[5px] rounded-full bg-black/60"></span>
//                 <img src="/tiktok.png" alt="TikTok" className="h-[25px] w-[25px]" />
//               </div>
//               <div className="flex items-center space-x-2 text-gray-800 mt-[35px]">
//                 <img src="/call.png" alt="Call" className="h-[28px] w-[32px]" />
//                 <span className="text-[18px] font-semibold">+92 304 1980001</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom full-width divider */}
//         <div className="border-t border-[#302A25]/20 mt-8">
//           <p className="py-4 text-center text-[#302A25] text-[20px]">
//             © 2025 Albaraka Honey
//           </p>
//         </div>
//       </div>

//       {/* ===== Mobile Layout ===== */}
//       <div className="md:hidden max-w-[1175px] mx-auto px-6 py-8">
//         {/* Top: left links + right logo */}
//         <div className="flex justify-between items-start">
//           {/* Left links */}
//           <div className="flex flex-col gap-2">
//             {LINKS.map((l) => (
//               <Link
//                 key={l.label}
//                 to={l.to}
//                 className="text-[#302A25] hover:text-amber-700 text-[15px]"
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right logo + tagline */}
//           <div className="flex flex-col items-center text-center">
//             <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
//             <p className="text-gray-600 mt-2 text-[13px]">
//               Albaraka Honey – Pure Blessings In Every Drop
//             </p>
//           </div>
//         </div>

//         {/* Divider + socials + phone */}
//         <div className="border-t border-[#302A25]/20 mt-6 pt-6">
//           <div className="flex flex-col items-center space-y-4">
//             <div className="flex items-center space-x-3">
//               <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
//               <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
//               <img src="/fb.png" alt="Facebook" className="h-5 w-5" />
//               <span className="w-[4px] h-[4px] rounded-full bg-black/60"></span>
//               <img src="/tiktok.png" alt="TikTok" className="h-5 w-5" />
//             </div>
//             <div className="flex items-center space-x-2 text-gray-800">
//               <img src="/call.png" alt="Call" className="h-4 w-4" />
//               <span className="text-[15px]">+92 304 1980001</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom divider + copyright */}
//         <div className="border-t border-[#302A25]/20 mt-6 pt-4">
//           <p className="text-center text-[#302A25] text-[14px]">
//             © 2025 Albaraka Honey
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
