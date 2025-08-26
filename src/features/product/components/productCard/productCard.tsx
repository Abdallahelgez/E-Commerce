import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold text-center">{product.title}</h2>
      <p className="text-gray-500 text-sm line-clamp-2 text-center">
        {product.description}
      </p>
      <span className="mt-2 font-bold">${product.price}</span>
    </div>
  );
};
export default ProductCard;