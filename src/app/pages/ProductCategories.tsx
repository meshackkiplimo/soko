import React from 'react';
import ProductCard from '../components/ProductCard'; // Assuming ProductCard component is in a separate file

const HomePage = () => {
  const products = [
    {

  
      name: 'Product 1',
      image: '/images/product1.jpg',
      price: 19.99,
      rating: 4.5,
      reviews: 23,
      category: 'Electronics',
      location: 'New York, NY',
      description: 'A high-quality product with amazing features.',
    }
    ,
    {


      name: 'Product 2',
      image: '/images/product2.jpg',
      price: 29.99,
      rating: 4.2,
      reviews: 15,
      category: 'Clothing',
      location: 'Los Angeles, CA',
      description: 'Comfortable and stylish clothing for all ages.',
    }
    ,
    {


      name: 'Product 3',
      image: '/images/product3.jpg',
      price: 39.99,
      rating: 4.8,
      reviews: 50,
      category: 'Home & Kitchen',
      location: 'Chicago, IL',
      description: 'High-quality home appliances for your kitchen.',
    }
    ,
    {


      name: 'Product 4',
      image: '/images/product4.jpg',
      price: 49.99,
      rating: 4.0,
      reviews: 10,
      category: 'Beauty & Personal Care',
      location: 'San Francisco, CA',
      description: 'Gentle and effective skincare products.',
    }

    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Best Deal online on smart phone </h1>
      <h2 className="text-xl font-semibold mb-6">AT A CHEAP PRICE.</h2>
      <p>UP to 60% OFF</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;