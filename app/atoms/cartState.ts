import { atom } from "recoil"

type CartItem = {
    price: number;
    quantity: number;
    id: number;
    name: string;
    // Other properties
};

export const cartState = atom<CartItem[]>({
    key: 'cartState',
    default: [],
});