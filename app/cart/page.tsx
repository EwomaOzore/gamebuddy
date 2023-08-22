"use client";

import React from 'react';
import { cartState } from '../atoms/cartState';
import { useRecoilState } from 'recoil';
import CartList from '../components/CartList';
import Header from '../components/Header';

const Cart = () => {
    const [cartItem, setCartItem] = useRecoilState(cartState);

    const totalPrice = () => {
        return cartItem.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl mt-12 font-semibold mb-8">
                    Your Cart
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        {cartItem.length <= 0 ? (
                            <p className="text-center text-lg mt-16">
                                Your Cart is Empty
                            </p>
                        ) : (
                            cartItem.map(item => (
                                <div
                                    key={item.id}
                                    className="bg-white p-1 rounded-lg shadow-md mb-4"
                                >
                                    <CartList data={item} />
                                </div>
                            ))
                        )}
                    </div>
                    {cartItem.length > 0 && (
                        <div className="md:w-1/4">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="text-l mb-4">
                                    Total: ₦{totalPrice()}
                                </div>
                                <button className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
