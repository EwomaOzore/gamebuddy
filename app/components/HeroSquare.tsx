// components/HeroSquare.tsx
import React from 'react';

const HeroSquare: React.FC = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center px-8 bg-blue-500"
            style={{ backgroundImage: 'url("/images/backimg.jpg")' }}
        >
            <div className="max-w-lg text-white p-10 rounded-lg text-center px-10 bg-blue-500">
                <h1 className="text-4xl font-bold mb-4">Get 5% Cash Back On Items Above ₦200,000</h1>
                <p className="text-xl">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <br />
                <a
                    href="#"
                    className="mt-4 px-6 py-3 bg-white rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition"
                >
                    Learn More
                </a>
            </div>

        </div>
    );
};

export default HeroSquare;
