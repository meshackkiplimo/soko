import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, rating, reviews }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <Image src={image} alt={name} width={200} height={200} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-500 mb-2">KSH {price}</p>
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.386-1.23 .978-2.167 1.982-2.871a6.516 6.516 0 011.982 2.871M4 4.468V4.468a2.22 2.22 0 00-2.22 2.22v7.084a2.22 2.22 0 002.22 2.22H4l.75 7.25a2.22 2.22 0 002.22 2.22h7.084a2.22 2.22 0 002.22-2.22L16 13.75H20a2.22 2.22 0 002.22-2.22V6.688a2.22 2.22 0 00-2.22-2.22H16L13.75 4H4zm14 12.068a2.22 2.22 0 012.22-2.22h7.084a2.22 2.22 0 012.22 2.22v7.084a2.22 2.22 0 01-2.22 2.22h-7.084a2.22 2.22 0 01-2.22-2.22v-7.084z" />
          </svg>
          <span className="ml-1">{rating}</span>
          <span className="text-gray-500 ml-2">({reviews} reviews)</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;