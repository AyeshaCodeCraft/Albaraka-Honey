
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "./Banner"; // ✅ import banner
import ProductDetail from "../components/ProductDetail";
import DescriptionReviews from "../components/DescriptionReviews";
import ReviewsList from "../components/ReviewsList";
import type { ProductFromDB, ProductDetailProps } from "../types/Product";

const ProductSelectionWrapper = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      fetch(`http://localhost:5000/products/${numericId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Product not found");
          return res.json();
        })
        .then((data: ProductFromDB) => {
          const mapped: ProductDetailProps = {
            id: data.id,
            nameEn: data.nameEn,
            nameUr: data.nameUr,
            price: data.price,
            oldPrice: data.oldPrice,
            discount: data.discount,
            rating: data.rating,
            reviewsCount: data.reviews,
            weight: data.weight,
            images: data.images,
          };
          setProduct(mapped);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setProduct(null);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div>
      {/* ✅ Free Delivery Banner */}
      <Banner />

      <Navbar/>
      <ProductDetail product={product} />
      <DescriptionReviews
        product={{ id: product.id, nameEn: product.nameEn }}
        onNewReview={() => setRefreshKey(prev => prev + 1)}
      />
      <ReviewsList key={refreshKey} productId={product.id} />
    </div>
  );
};

export default ProductSelectionWrapper;
