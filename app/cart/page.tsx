"use client";

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { Product } from '../data/productData';
import Footer from '../components/Footer';

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartProps {
    cartItems: CartItem[];
    onRemoveFromCart: (product: Product) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
    const calculateTotalPrice = () => {
        if (!cartItems) return 0;

        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const calculateTotalQuantity = () => {
        if (!cartItems) return 0;

        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div>
            <Header cartItemsCount={0} onCartButtonClick={() => { }} />
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto py-8">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
                        {cartItems && cartItems.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems?.map((item) => (
                                    <div
                                        key={item.product.id}
                                        className="flex items-center space-x-4 border-b pb-4"
                                    >
                                        <div className="w-16 h-16 relative">
                                            <Image
                                                src={item.product.imageSrc}
                                                alt={item.product.name}
                                                width={64}
                                                height={64}
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-sm font-semibold">{item.product.name}</p>
                                            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">₦{item.product.price.toFixed(2)}</p>
                                            <button
                                                className="p-1 rounded-full hover:bg-red-500 hover:text-white transition"
                                                onClick={() => onRemoveFromCart(item.product)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-lg font-semibold">Total:</p>
                                    <p className="text-lg font-bold">₦{calculateTotalPrice().toFixed(2)}</p>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-sm text-gray-500">Total Items:</p>
                                    <p className="text-sm font-semibold">{calculateTotalQuantity()}</p>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
                                    <Link href="/checkout">Checkout</Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
