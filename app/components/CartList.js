import Image from 'next/image';
import React from 'react';

const CartList = ({ data }) => {
    const { name, imageSrc, price } = data;

    return (
        <div key={data.id} className='items bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
            <Image className='h-[100px]' width="150" height="100" src={imageSrc} alt="" />
            <div>
                <div className='font-bold text-2xl'>{name}</div>
            </div>
            <div className='text-2xl'>₦{price}</div>
        </div>
    );
}

export default CartList;
