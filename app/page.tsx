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
import { Product, playstationProducts, xboxProducts, nintendoProducts, pcProducts, steamdeckProducts } from './data/productData';
import { bestDealsProducts } from './data/productData';

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>('PlayStation');
    function addToCart(product: Product): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
            <Head>
                <title>GameBuddy - Your One-Stop Shop for Games</title>
                <meta
                    name="Gamebudy"
                    content="Welcome to GameBuddy - your one-stop shop for games!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <HeroSection />
            <TopCategoriesSection />
            <BestDealsSection bestDealsProducts={bestDealsProducts} />
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
                handleCategoryChange={(categoryId) => setActiveCategory(categoryId)} cartItems={[]} />
            <PromotionsSection />
            <HeroSquare />
            <ServicesSection />
            <Footer />
            <SecondaryFooter />
        </div>
    );
};
