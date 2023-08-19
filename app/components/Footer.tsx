"use client";

import React, { useState, useEffect } from 'react';
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaApplePay,
    FaGooglePay,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaArrowUp,
} from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                {/* Left Section */}
                <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Accepted Payments</h3>
                        <div className="flex space-x-4 mt-2">
                            <FaCcVisa className="text-4xl" />
                            <FaCcMastercard className="text-4xl" />
                            <FaCcPaypal className="text-4xl" />
                            <FaApplePay className="text-4xl" />
                            <FaGooglePay className="text-4xl" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Stay Connected</h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://www.facebook.com/your_facebook_url" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-4xl" />
                            </a>
                            <a href="https://twitter.com/your_twitter_url" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-4xl" />
                            </a>
                            <a href="https://www.instagram.com/your_instagram_url" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-4xl" />
                            </a>
                            <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-4xl" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">App Download</h3>
                        <div className="flex space-x-4 mt-4">
                            <button>
                                <a
                                    href="#"
                                    className="px-6 py-3 bg-white rounded text-black font-semibold hover:bg-blue-500 hover:text-white transition"
                                >
                                    Google Play
                                </a>
                            </button>
                            <button>
                                <a
                                    href="#"
                                    className="px-6 py-3 bg-white rounded text-black font-semibold hover:bg-blue-500 hover:text-white transition"
                                >
                                    App Store
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-3/4 flex flex-col md:flex-row md:space-x-4 hide-on-mobile">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4">Shopping with Us</h3>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="#">Making Payments</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Delivery Options</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Buyer Protection</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 hide-on-mobile">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="#">About GameBuddy</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Careers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">News & Blog</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Help</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Press Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Shop By Location</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Affiliate & Partners</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Ideas & Guides</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 hide-on-mobile">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="#">Customer Service</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Gift Card</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Mobile App</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Shipping & Delivery</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Order Pickup</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Account Signup</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 show-on-mobile">
                        <h3 className="text-xl font-bold mb-4">Help</h3>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="#">Returns</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Track Orders</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Contact Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Feedback</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Security & Fraud</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </footer>
    );
};

const SecondaryFooter: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <div className="container mx-auto">
                <div className="flex items-center justify-center space-x-4">
                    <a href="/terms-of-service" className="text-sm hover:text-blue-500">
                        Terms of Service
                    </a>
                    <a href="/privacy-policy" className="text-sm hover:text-blue-500">
                        Privacy Policy
                    </a>
                    <span className="text-sm">&copy; {new Date().getFullYear()} GameBuddy Inc.</span>
                </div>
            </div>
        </footer>
    );
};

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsVisible(scrollTop > 300); // Show the button when scrolled down 300 pixels
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Add the event listener to handle scrolling
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Pass an empty array as the second argument to useEffect to run it only once on mount

    return (
        <button
            className={`fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full ${isVisible ? 'visible' : 'invisible'
                }`}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    );
};

export default Footer;
export { SecondaryFooter };
