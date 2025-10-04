


import Hero from "../../components/Hero";
import Shop from "../../components/Shop";

const HomeWrapper = () => {
  return (
    <div className="w-full">
      <Hero
        title="Lorem Ipsum"
        description="At Al Baraka Honey, we believe that nature’s sweetest gift should be 
enjoyed in its purest form. That’s why we bring you 100% natural, raw, 
and authentic honey, harvested responsibly from trusted hives and 
carefully packed to preserve all its natural goodness."
        bgImage="/bgImage.png"
        insideHero={true}
        centerContent={true}
      />
      <Shop/>
 
    </div>
  );
};

export default HomeWrapper;







// import Navbar from "../../components/Navbar";
// import Shop from "./sections/Shop"; 

// const HomeWrapper = () => {
//   return (
//     <div className="w-full">
//       <Navbar />
//       <Shop />
//     </div>
//   );
// };

// export default HomeWrapper;




// mport Hero from "../../components/Hero";
// import Navbar from "../../components/Navbar";
// import Shop from "../../components/Shop";

// const HomeWrapper = () => {
//   return (
//     <div className="w-full">
//       {/* Add same spacing as Navbar inside Hero */}
//       <div className="pt-[54px]">
//         <Navbar />
//       </div>

//       <Shop />
//     </div>
//   );
// };

// export default HomeWrapper;
