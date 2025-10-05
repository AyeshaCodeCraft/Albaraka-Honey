
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  weight: string;
  images: string[];
}

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => navigate(`/product/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
