"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer, { SecondaryFooter } from './components/Footer';
import HeroSection from './components/HeroSection';
import TopCategoriesSection from './components/TopCategoriesSection';
import BestDealsSection from './components/BestDealsSection';
import ProductCategorySection from './components/ProductCategorySection';
import PromotionsSection from './components/PromotionsSection';
import HeroSquare from './components/HeroSquare';
import ServicesSection from './components/ServicesSection';
import Cart from './cart/page';
import { Product, playstationProducts, xboxProducts, nintendoProducts, pcProducts, steamdeckProducts } from './data/productData';
import { bestDealsProducts } from './data/productData'

const Home: React.FC = () => {
    const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('PlayStation'); // Set the default active category

    const addToCart = (product: Product) => {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex((item) => item.product.id === product.id);

            if (existingItemIndex !== -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                return [...prevCartItems, { product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product: Product) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter((item) => item.product.id !== product.id);
            return updatedCartItems;
        });
    };


    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <Head>
                <title>GameBuddy - Your One-Stop Shop for Games</title>
                <meta
                    name="description"
                    content="Welcome to GameBuddy - your one-stop shop for games!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header cartItemsCount={cartItemsCount} onCartButtonClick={() => setShowCart(!showCart)} />
            <HeroSection />
            <TopCategoriesSection />
            <BestDealsSection
                bestDeals={bestDealsProducts}
                addToCart={addToCart}
                cartItems={cartItems}
            />
            <ProductCategorySection
                categories={[
                    { id: 'PlayStation', name: 'PlayStation' },
                    { id: 'Xbox', name: 'Xbox' },
                    { id: 'Nintendo', name: 'Nintendo' },
                    { id: 'PC', name: 'PC' },
                    { id: 'Steam Deck', name: 'Steam Deck' },
                ]}
                productsData={{
                    PlayStation: playstationProducts,
                    Xbox: xboxProducts,
                    Nintendo: nintendoProducts,
                    PC: pcProducts,
                    'Steam Deck': steamdeckProducts,
                }}
                addToCart={addToCart}
                activeCategory={activeCategory}
                handleCategoryChange={(categoryId) => setActiveCategory(categoryId)}
            />
            <PromotionsSection />
            <HeroSquare />
            <ServicesSection />
            <Footer />
            <SecondaryFooter />
            {showCart && (
                <div className="fixed top-8 right-8 z-10">
                    <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
                </div>
            )}

        </div>
    );
};

export default Home;
