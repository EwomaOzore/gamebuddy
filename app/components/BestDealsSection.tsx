// BestDealsSection.tsx
import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Product } from '../data/productData';
import Image from 'next/image';

interface BestDealsSectionProps {
    bestDeals: Product[];
    cartItems: Product[];
    addToCart: (product: Product) => void;
}

const addToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    // ... rest of your code
};


const BestDealsSection: React.FC<BestDealsSectionProps> = ({ bestDeals, addToCart, cartItems }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <section className="p-8 scroll-container bg-gray-100">
            <h2 className="text-3xl scroll-container font-bold mb-6">Best Deals</h2>
            <div className="overflow-x-auto">
                <div className="flex space-x-4">
                    {bestDeals.map((product) => (
                        <div
                            key={product.id}
                            className="w-72 bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-2 cursor-pointer"
                            onClick={() => handleProductClick(product)}
                        >
                            <div className="w-48 h-48 bg-white-300 rounded-lg flex flex-col">
                                <button
                                    className="mt-2 mr-2 p-2 rounded-full bg-green-500 text-white hover:bg-green-400 self-end"
                                    title="Add to Cart"
                                    onClick={() => addToCart(product)}
                                >
                                    <FaShoppingCart />
                                </button>
                                <Image
                                    src={product.imageSrc}
                                    width={500}
                                    height={500}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <br />
                            <br />
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.details}</p>
                                <div className="flex items-center justify-center space-x-1">
                                    {Array.from({ length: Math.floor(product.stars) }, (_, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))}
                                    <span>{product.stars}</span>
                                </div>
                                <p className="text-xl font-bold">₦{product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestDealsSection;
