import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch product data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col p-4 h-96 bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-3"
            />
            <h3 className="font-bold text-md mb-1 text-center truncate">{product.title}</h3>
            {/* Updated description style with line clamp */}
            <p className="text-gray-600 text-sm text-center flex-grow overflow-hidden line-clamp-3">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-blue-600 text-center mt-2">
              ${product.price.toFixed(2)}
            </p>
            {/* Add to Cart Button */}
            <button
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition duration-300 w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
