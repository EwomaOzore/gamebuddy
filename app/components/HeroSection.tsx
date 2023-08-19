import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-left px-8 hidden md:flex"
            style={{ backgroundImage: 'url("/images/background-image.jpg")' }}
        >
            <div className="max-w-lg text-black text-center">
                <h1 className="text-4xl font-bold mb-4">GameBuddy</h1>
                <p className="text-xl font-bold">Your one-stop shop for games!</p>
            </div>
        </div>
    );
};

export default HeroSection;
