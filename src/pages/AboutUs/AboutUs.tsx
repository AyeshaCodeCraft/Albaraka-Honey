

import Hero from "../../components/Hero";

import Gift from "./sections/Gift";
import Honey from "./sections/Honey";

const AboutUs = () => {
  return (
    <div className="w-full">
      <Hero
        title="About us"
        description="At Al Baraka Honey, we believe that nature’s sweetest gift should be 
enjoyed in its purest form. That’s why we bring you 100% natural, raw, 
and authentic honey, harvested responsibly from trusted hives and 
carefully packed to preserve all its natural goodness."
        bgImage="/bgImage.png"
        insideHero={true}
        centerContent={true}
      />
      <Gift/>
         <Honey/>
    </div>
  );
};

export default AboutUs;
