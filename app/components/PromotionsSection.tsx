// PromotionsSection.tsx
import Image from 'next/image';
import React from 'react';

interface Promotion {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
}

const PromotionsSection: React.FC = () => {
    const promotionsData: Promotion[] = [
        {
            id: 1,
            imageSrc: '/images/summersale.jpg',
            title: 'Summer Sale',
            description: 'Get up to 50% off on all products this summer!',
        },
        {
            id: 2,
            imageSrc: '/images/limitedtimeoffer.jpg',
            title: 'Limited Time Offer',
            description: 'Buy one, get one free on selected items!',
        },
        // Add more promotions as needed
    ];

    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Check Out Our Latest Promotions</h2>
            <div className="grid grid-cols-2 gap-4  z-[-1000]">
                {promotionsData.map((promotion) => (
                    <div
                        key={promotion.id}
                        className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-2"
                    >
                        <div className="w-64 h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                            <Image
                                src={promotion.imageSrc}
                                alt={promotion.title}
                                layout="responsive"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold">{promotion.title}</h3>
                            <p className="text-sm text-gray-500">{promotion.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromotionsSection;
