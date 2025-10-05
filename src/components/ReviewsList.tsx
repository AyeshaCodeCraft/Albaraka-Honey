


import { useEffect, useState } from "react";
import type { Review } from "../types/Product";

interface ReviewsListProps {
  productId: string | number;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?productId=${productId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, [productId]);

  return (
    <div className="max-w-[1013px] mx-auto px-4 mt-6 space-y-4">
      {reviews.length === 0 && (
        <p className="text-center text-gray-500">No reviews yet.</p>
      )}
      {reviews.map((rev) => (
        <div key={rev.id} className="bg-white text-black shadow p-4 rounded-lg flex items-center justify-between gap-6">
          <h4 className="font-bold w-[150px] text-[16px]">{rev.name}</h4>
          <div className="text-yellow-500 w-[150px]">
            {"★".repeat(rev.rating)}
            {"☆".repeat(5 - rev.rating)}
          </div>
          <p className="flex-1 font-[14px]">{rev.message}</p>
          <p className="text-sm text-gray-500 w-[120px] text-right">{rev.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
