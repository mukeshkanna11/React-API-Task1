import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/Productlist';
import CartModal from './Components/CartModel';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto">
      <Navbar cartCount={cart.length} openModal={() => setModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cartItems={cart}
          closeModal={() => setModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
