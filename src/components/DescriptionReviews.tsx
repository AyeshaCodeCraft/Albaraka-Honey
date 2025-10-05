
// import { useState, useEffect } from "react";

// interface Review {
//   id?: number;
//   productId: number;
//   name: string;
//   email: string;
//   message: string;
//   rating: number;
//   date: string;
// }

// interface DescriptionReviewsProps {
//   product: { id: number; nameEn: string };
//   onNewReview?: (review: Review) => void;
// }



// const DescriptionReviews: React.FC<DescriptionReviewsProps> = ({ product, onNewReview }) => {
//   const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [form, setForm] = useState({ name: "", email: "", message: "", rating: 0 });
//   const [submitted, setSubmitted] = useState(false);

//   // ✅ Fetch reviews from db.json (json-server)
//   useEffect(() => {
//     fetch(`http://localhost:5000/reviews?productId=${product.id}`)
//       .then((res) => res.json())
//       .then((data) => setReviews(data))
//       .catch((err) => console.error("Error fetching reviews:", err));
//   }, [product.id]);

//   // ✅ Submit new review
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const newReview: Review = {
//       productId: product.id,
//       ...form,
//       date: new Date().toLocaleDateString(),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newReview),
//       });

//       if (!res.ok) throw new Error("Failed to save review");

//       const savedReview = await res.json();

//       // Update state immediately for real-time UI
//       setReviews([savedReview, ...reviews]);
//       setForm({ name: "", email: "", message: "", rating: 0 });
//       setSubmitted(true);

//       if (onNewReview) {
//         onNewReview(savedReview);
//       }

//       setTimeout(() => setSubmitted(false), 3000);
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   return (
//     <div className="bg-[#36454F] text-white py-12 mt-12 min-h-[512px]">
//       <div className="max-w-[1013px] mx-auto px-4">
//         {/* Tabs */}
//         <div className="flex justify-center gap-10 mb-10">
//           <button
//             onClick={() => setActiveTab("description")}
//             className={`pb-2 text-lg font-semibold transition ${
//               activeTab === "description" ? "border-b-2 border-white" : "opacity-70"
//             }`}
//           >
//             Description
//           </button>
//           <button
//             onClick={() => setActiveTab("reviews")}
//             className={`pb-2 text-lg font-semibold transition ${
//               activeTab === "reviews" ? "border-b-2 border-white" : "opacity-70"
//             }`}
//           >
//             Reviews ({reviews.length})
//           </button>
//         </div>

//         {/* Content */}
//         {activeTab === "description" && (
//           <div className="text-center space-y-6 leading-relaxed">
//             <h3 className="text-xl font-bold">Healing Power Of Honey</h3>
//             <p className="capitalize">
//               Honey is one of nature’s most precious gifts, packed with essential minerals,
//               vitamins, and antioxidants. It strengthens the immune system, improves liver
//               function, sharpens memory, boosts vitality, and even helps prevent major
//               illnesses. From relieving constipation and cough to breaking kidney stones and
//               healing wounds, honey is a natural remedy for over 70 diseases without any side
//               effects.
//             </p>

//             <h3 className="text-xl font-bold">Daily Health Benefits</h3>
//             <p className="capitalize">
//               Regular use of honey not only enhances energy and vision but also protects the
//               heart, controls harmful cholesterol, and supports overall wellness. Especially
//               beneficial for children, the elderly, and even diabetic patients (with berry
//               honey being most effective), honey is truly a complete tonic for a healthy life.
//             </p>
//           </div>
//         )}

//         {activeTab === "reviews" && (
//           <div className="space-y-6 text-left w-full">
//             {submitted && (
//               <div className="bg-[#302A25] text-white px-4 py-2 rounded-md inline-block">
//                 ✅ Your review has been submitted.
//               </div>
//             )}

//             {/* Review Form */}
//             <div>
//               <p className="text-[20px] font-poppins font-bold">
//                 Be the first to Review "{product.nameEn}"
//               </p>
//               <p className="text-[18px] font-normal  mb-[26px] font-poppins">
//                 Your e-mail address will not be published. Required field are marked
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
//               {/* Rating */}
//               <div className="flex items-center gap-2">
//                 <span>Your Rating:</span>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     onClick={() => setForm({ ...form, rating: star })}
//                     className={`cursor-pointer text-2xl ${
//                       form.rating >= star ? "text-yellow-400" : "text-gray-400"
//                     }`}
//                   >
//                     ★
//                   </span>
//                 ))}
//                 {form.rating > 0 && <span>{form.rating}.0</span>}
//               </div>

//               {/* Inputs */}
//               <div className="flex gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   required
//                   className="w-1/2 p-[16px] rounded-[15px] border-none text-black bg-white"
//                 />
//                 <input
//                   type="email"
//                   placeholder="E-mail"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   required
//                   className="w-1/2 p-[16px] rounded-[15px] text-black bg-white"
//                 />
//               </div>

//               <textarea
//                 placeholder="Your Message"
//                 value={form.message}
//                 rows={5}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 required
//                 className="w-full p-[16px] rounded-[25px] text-black bg-white"
//               />

//               <div className="flex items-center gap-2">
//                 <input type="checkbox" id="saveInfo" className="cursor-pointer w-[20px]" />
//                 <label htmlFor="saveInfo" className="text-[16px] font-normal">
//                   Save my name, e-mail, and website in this browser for next time I comment.
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="px-[28px] py-[12px] font-semibold text-[20px] font-poppins bg-white text-black rounded-[15px] cursor-pointer"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DescriptionReviews;















import { useState, useEffect } from "react";
import type { Review } from "../types/Product";

interface DescriptionReviewsProps {
  product: { id: string | number; nameEn: string };
  onNewReview?: (review: Review) => void;
}

const DescriptionReviews: React.FC<DescriptionReviewsProps> = ({ product, onNewReview }) => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", email: "", message: "", rating: 0 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?productId=${product.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [product.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      productId: product.id,
      ...form,
      date: new Date().toLocaleDateString(),
    };

    try {
      const res = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!res.ok) throw new Error("Failed to save review");

      const savedReview = await res.json();
      setReviews([savedReview, ...reviews]);
      setForm({ name: "", email: "", message: "", rating: 0 });
      setSubmitted(true);

      onNewReview?.(savedReview);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-[#36454F] text-white py-12 mt-12 min-h-[512px]">
      <div className="max-w-[1013px] mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-10">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 text-lg font-semibold transition ${
              activeTab === "description" ? "border-b-2 border-white" : "opacity-70"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 text-lg font-semibold transition ${
              activeTab === "reviews" ? "border-b-2 border-white" : "opacity-70"
            }`}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === "description" && (
          <div className="text-center space-y-6 leading-relaxed">
            <h3 className="text-xl font-bold">Healing Power Of Honey</h3>
            <p className="capitalize">
              Honey is one of nature’s most precious gifts, packed with essential minerals,
              vitamins, and antioxidants. It strengthens the immune system, improves liver
              function, sharpens memory, boosts vitality, and even helps prevent major
              illnesses. From relieving constipation and cough to breaking kidney stones and
              healing wounds, honey is a natural remedy for over 70 diseases without any side
              effects.
            </p>

            <h3 className="text-xl font-bold">Daily Health Benefits</h3>
            <p className="capitalize">
              Regular use of honey not only enhances energy and vision but also protects the
              heart, controls harmful cholesterol, and supports overall wellness. Especially
              beneficial for children, the elderly, and even diabetic patients (with berry
              honey being most effective), honey is truly a complete tonic for a healthy life.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6 text-left w-full">
            {submitted && (
              <div className="bg-[#302A25] text-white px-4 py-2 rounded-md inline-block">
                ✅ Your review has been submitted.
              </div>
            )}

            {/* Review Form */}
            <div>
              <p className="text-[20px] font-poppins font-bold">
                Be the first to Review "{product.nameEn}"
              </p>
              <p className="text-[18px] font-normal  mb-[26px] font-poppins">
                Your e-mail address will not be published. Required field are marked
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <span>Your Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setForm({ ...form, rating: star })}
                    className={`cursor-pointer text-2xl ${
                      form.rating >= star ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
                {form.rating > 0 && <span>{form.rating}.0</span>}
              </div>

              {/* Inputs */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-1/2 p-[16px] rounded-[15px] border-none text-black bg-white"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-1/2 p-[16px] rounded-[15px] text-black bg-white"
                />
              </div>

              <textarea
                placeholder="Your Message"
                value={form.message}
                rows={5}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full p-[16px] rounded-[25px] text-black bg-white"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" id="saveInfo" className="cursor-pointer w-[20px]" />
                <label htmlFor="saveInfo" className="text-[16px] font-normal">
                  Save my name, e-mail, and website in this browser for next time I comment.
                </label>
              </div>

              <button
                type="submit"
                className="px-[28px] py-[12px] font-semibold text-[20px] font-poppins bg-white text-black rounded-[15px] cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};


export default DescriptionReviews;
