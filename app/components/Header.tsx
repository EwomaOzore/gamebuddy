"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { cartState } from '../atoms/cartState'
import { useRecoilState } from 'recoil'
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

type CartItem = {
    id: number;
    // Other properties
};

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [cartItem, setCartItem] = useRecoilState(cartState);

    const handleMobileMenuToggle = () => {
        setShowMobileMenu(!showMobileMenu);
    };


    return (
        <header className="bg-headerColor text-white p-4 flex flex-col md:flex-row items-center justify-between z-1000">
            <div className="flex items-center">
                <button className="md:hidden text-xl" onClick={handleMobileMenuToggle}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />}
                </button>
                <Link href='/'><h1 className="text-3xl font-semibold ml-2">GameBuddy</h1></Link>
            </div>

            <div className={`md:flex md:items-center space-x-4 mt-4 md:mt-0 ${showMobileMenu ? 'block' : 'hidden md:block'}`}>
                <button className="text-lg font-semibold hover:text-gray-300 transition">Categories</button>
                <button className="text-lg font-semibold hover:text-gray-300 transition">Deals</button>
                <button className="text-lg font-semibold hover:text-gray-300 transition">What's New</button>
            </div>

            <form className={`relative md:ml-4 mt-4 md:mt-0 ${showMobileMenu ? 'block md:hidden' : 'hidden md:block'}`}>
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 text-black border rounded-md focus:outline-none focus:border-blue-300"
                    placeholder="Search"
                />
                <div className="absolute top-3 left-3">
                    <FaSearch className="text-gray-500 text-xl" />
                </div>
            </form>

            <div className="flex flex-col md:flex-row items-center space-x-4 mt-4 md:mt-0">
                <div className={`md:flex space-x-4 ${showMobileMenu ? 'block' : 'hidden md:flex'}`}>
                    <div className="flex items-center">
                        <button className="text-lg font-semibold hover:text-gray-300 transition">
                            <FaUser className="text-xl ml-4" />
                        </button>

                        <Link href='/cart'>
                            <FaShoppingCart className="text-xl ml-4" />
                            <span className='cart-count-badge'>{cartItem.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
