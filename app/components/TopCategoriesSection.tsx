import Image from 'next/image';
import React from 'react';

const TopCategoriesSection: React.FC = () => {
    return (
        <section className="bg-gray-100 p-8">
            <h2 className="text-3xl font-bold mb-6">Our Top Categories</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <a href="#" className="category-link">
                    <div className="bg-white rounded-lg p-10 flex items-center justify-center">
                        <Image src="/images/playstation.png" alt="PlayStation" width="500" height="500" className="w-25" />
                    </div>
                </a>
                <a href="#" className="category-link">
                    <div className="bg-white rounded-lg p-10 flex items-center justify-center">
                        <Image src="/images/pc.png" alt="PC" width="500" height="500" className="w-25" />
                    </div>
                </a>
                <a href="#" className="category-link">
                    <div className="bg-white rounded-lg p-10 flex items-center justify-center">
                        <Image src="/images/xbox.png" alt="Xbox" width="500" height="500" className="w-25" />
                    </div>
                </a>
                <a href="#" className="category-link">
                    <div className="bg-white rounded-lg p-10 flex items-center justify-center">
                        <Image src="/images/nintendo.png" alt="Nintendo" width="500" height="500" className="w-25" />
                    </div>
                </a>
                <a href="#" className="category-link">
                    <div className="bg-white rounded-lg p-10 flex items-center justify-center">
                        <Image src="/images/steamdeck.png" alt="Steam Deck" width="500" height="500" className="w-25" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default TopCategoriesSection;
