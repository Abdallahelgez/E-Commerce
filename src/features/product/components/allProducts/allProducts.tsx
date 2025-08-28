import React, { use, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard/productCard";
import { useProducts } from "../..//hooks/useProducts";

const ProductsList: React.FC = () => {
  const {products ,loading ,error}= useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> 
      ))}
    </div>
  );
};

export default ProductsList