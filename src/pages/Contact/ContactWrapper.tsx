


// // src/pages/ContactWrapper.tsx
// import Hero from "../../components/Hero";
// import Order from "./sections/Order";
// import Relationships from "./sections/Relationships";
// // You can import more sections as needed, e.g.:
// import ContactForm from "./sections/ContactForm";
// // import Address from "./sections/Address";

// const Contact = () => {
//   return (
//     <div>
//       <Hero
//         title="Contact Us"
//         description="At Al Baraka Honey, we bring you pure and natural honey harvested
//         from trusted hives. From Apis mellifera and Apis florea wild honey to the 
//         rare Berry Bee Honey, every jar is filled with nature’s goodness."
//         bgImage="/bgImage.png" 
//         insideHero={true}      // Show Navbar in hero
//         centerContent={false}  // Left-aligned text (for contact page)
//       />

//       <main className="w-full ">
//         {/* Contact form / info section */}
//         {/* <ContactForm /> */}
//         {/* <Address /> */}

//         {/* Order section */}
//         <ContactForm />
//          <Relationships />
//         <Order />
       
//       </main>
//     </div>
//   );
// };

// export default Contact;



import Hero from "../../components/Hero";

import ContactForm from "./sections/ContactForm";
import Order from "./sections/Order";
import Relationships from "./sections/Relationships";

const ContactWrapper = () => {
  return (
    <div className="w-full">
      {/* Hero with Navbar inside */}
      <Hero
        title="Contact Us"
        description="At Al Baraka Honey, we bring you pure and natural honey harvested from trusted hives. From Apis mellifera and Apis florea wild honey to the  rare Berry Bee Honey, every jar is filled with nature’s goodness."
        bgImage="/bgImage.png"
        insideHero={true} // Navbar sits inside Hero
        centerContent={false}
      />

      {/* Content */}
      <main className="w-full">
        {/* Standalone Navbar spacing handled inside Navbar component */}
        {/* <Navbar /> - only needed if no Hero */}

        <ContactForm />
        <Relationships />
        <Order />
      </main>
    </div>
  );
};

export default ContactWrapper;
