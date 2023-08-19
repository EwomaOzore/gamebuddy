import React from 'react';
import { FaGamepad, FaUser, FaGift } from 'react-icons/fa';

interface Service {
    id: number;
    icon: React.ReactElement;
    title: string;
    description: string;
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            icon: <FaGamepad className="text-3xl mx-auto" />,
            title: 'Wide Game Selection',
            description: 'Choose from a wide range of games across different platforms.',
        },
        {
            id: 2,
            icon: <FaUser className="text-3xl mx-auto" />,
            title: 'Community',
            description: 'Join our vibrant gaming community and connect with fellow gamers.',
        },
        {
            id: 3,
            icon: <FaGift className="text-3xl mx-auto" />,
            title: 'Deals and Offers',
            description: 'Get access to exclusive deals and offers on popular games.',
        },
    ];

    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="p-4 bg-white rounded-lg shadow text-center">
                        <div className="icon-container text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
