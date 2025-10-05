

// src/types/Product.ts

export interface ProductFromDB {
  id: number;
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number; // number of reviews in DB
  weight: string;
  images: string[];
}

// Standard product type for ProductDetail and wrapper components
export interface ProductDetailProps {
  id: string | number; // allow string | number
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviewsCount: number; // mapped from reviews
  weight: string;
  images: string[];
}

// Review type for reviews & DescriptionReviews
export interface Review {
  id?: number;
  productId: string | number;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
}
