import React from 'react';
import ProductCard from './ProductCard';
import tv from '/public/tv.svg';
import gaming from '/public/gaming.svg';
import dell from '/public/dell.svg';
import Chromecast from '/public/chromecast.svg';

const HomePage = () => {
  const products = [
    {
      name: 'Product 1',
      image: tv,
      price: 19.99,
      rating: 4.5,
      reviews: 23,
      category: 'Electronics',
      location: 'New York, NY',
      description: 'A high-quality product with amazing features.',
    },
    {
      name: 'Product 2',
      image: gaming,
      price: 29.99,
      rating: 4.2,
      reviews: 15,
      category: 'Clothing',
      location: 'Los Angeles, CA',
      description: 'Comfortable and stylish clothing for all ages.',
    },
    {
      name: 'Product 3',
      image: dell,
      price: 39.99,
      rating: 4.8,
      reviews: 50,
      category: 'Home & Kitchen',
      location: 'Chicago, IL',
      description: 'High-quality home appliances for your kitchen.',
    },
    {
      name: 'Product 4',
      image: Chromecast,
      price: 49.99,
      rating: 4.0,
      reviews: 10,
      category: 'Beauty & Personal Care',
      location: 'San Francisco, CA',
      description: 'Gentle and effective skincare products.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Promotional Banner */}
      <div className="bg-orange-500 text-white text-center py-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Deal Online on Smartphones</h1>
        <h2 className="text-xl font-semibold mb-2">AT A CHEAP PRICE.</h2>
        <p>UP to 60% OFF</p>
      </div>

      {/* Alana Electronics Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Alana Electronics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>

      {/* Another Promotional Banner */}
      <div className="bg-green-500 text-white text-center py-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Deal Online on Smartphones</h1>
        <h2 className="text-xl font-semibold mb-2">AT A CHEAP PRICE.</h2>
        <p>UP to 60% OFF</p>
      </div>

      {/* Sawa Electronics Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Sawa Electronics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>

      {/* Another Promotional Banner */}
      <div className="bg-blue-500 text-white text-center py-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Deal Online on Smartphones</h1>
        <h2 className="text-xl font-semibold mb-2">AT A CHEAP PRICE.</h2>
        <p>UP to 60% OFF</p>
      </div>

      {/* Biggy Electronics Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Biggy Electronics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
