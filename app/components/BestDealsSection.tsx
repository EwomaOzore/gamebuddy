// BestDealsSection.tsx
import React from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { cartState } from '../atoms/cartState';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';

interface BestDealsProduct {
    id: number;
    name: string;
    imageSrc: string;
    details: string;
    quantity: number;
    stars: number;
    price: number;
}

interface BestDealsSectionProps {
    bestDealsProducts: BestDealsProduct[];
}

const BestDealsSection: React.FC<BestDealsSectionProps> = ({ bestDealsProducts }) => {
    const [cartItem, setCartItem] = useRecoilState(cartState);

    const addItemToCart = (productId: number) => {
        const productIndex = cartItem.findIndex((pro) => pro.id === productId);
        if (productIndex === -1) {
            setCartItem((prevState) => [...prevState, bestDealsProducts.find((p) => p.id === productId)!]);
        } else {
            setCartItem((prevState) =>
                prevState.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
        const productName = bestDealsProducts.find((p) => p.id === productId)?.name;
        if (productName) {
            toast(`${productName} added to cart`);
        }
    };

    return (
        <section className="p-8 scroll-container bg-gray-100">
            <h2 className="text-3xl scroll-container font-bold mb-6">Best Deals</h2>
            <div className="overflow-x-auto flex space-x-4">
                {bestDealsProducts.map((product) => (
                    <div
                        key={product.id}
                        className="w-72 bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-2 cursor-pointer"
                    >
                        <div className="w-48 h-48 bg-white-300 rounded-lg flex flex-col">
                            <button
                                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-400 self-end"
                                title="Add to Cart"
                                onClick={() => addItemToCart(product.id)}
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
                            </div>
                            <span>{product.stars}</span>
                            <p className="text-xl font-bold">₦{product.price.toFixed(2)}</p>
                            <div>{product.quantity}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestDealsSection;
