import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Product } from '../data/productData';
import Image from 'next/image';

interface ProductCategory {
    id: string;
    name: string;
}

interface ProductCategorySectionProps {
    categories: ProductCategory[];
    productsData: Record<string, Product[]>;
    addToCart: (product: Product) => void;
    activeCategory: string;
    handleCategoryChange: (categoryId: string) => void;
}

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
    categories,
    productsData,
    addToCart,
    activeCategory,
    handleCategoryChange,
    // cartItems, // Add cartItems as a prop
}) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };
    const handleCloseProductPage = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="p-4 md:p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
            <div className="flex justify-center space-x-4 mb-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`text-lg font-semibold ${activeCategory === category.id ? 'text-blue-500' : 'text-black'
                            } hover:text-blue-500 transition`}
                        onClick={() => handleCategoryChange(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {productsData[activeCategory].map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow p-2 sm:p-4 flex flex-col items-center space-y-2 cursor-pointer"
                        onClick={() => handleProductClick(product)}
                    >
                        <div className="w-36 h-36 sm:w-48 sm:h-48 bg-white-300 rounded-lg flex flex-col justify-start items-end">
                            <button
                                className="mt-2 mr-2 p-2 rounded-full bg-green-500 text-white hover:bg-green-400"
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
                                layout="responsive"
                            />
                        </div>
                        <br />
                        <br />
                        <div className="text-center">
                            <h3 className="text-base sm:text-lg font-semibold">{product.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">{product.details}</p>
                            <div className="flex items-center justify-center space-x-1">
                                {Array.from({ length: Math.floor(product.stars) }, (_, index) => (
                                    <FaStar key={index} className="text-yellow-500" />
                                ))}
                                <span>{product.stars}</span>
                            </div>
                            <p className="text-sm sm:text-base font-bold">₦{product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCategorySection;
