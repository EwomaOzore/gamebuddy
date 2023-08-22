// productData.ts
export interface Product {
    id: number;
    name: string;
    imageSrc: string;
    quantity: number;
    details: string;
    stars: number;
    price: number;
}

export const bestDealsProducts = [
    {
        id: 1,
        imageSrc: '/images-playstation/ps4.jpg',
        name: 'PlayStation 4',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 264355,
    },
    {
        id: 2,
        imageSrc: '/images-playstation/ps5.jpg',
        name: 'PlayStation 5',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        "price": 485317,
    },
    {
        id: 3,
        imageSrc: '/images-xbox/xboxone.jpg',
        name: 'Xbox One',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 194015,
    },
    {
        id: 4,
        imageSrc: '/images-xbox/xboxseriesx.jpg',
        name: 'Xbox Series X',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    {
        id: 5,
        imageSrc: '/images-xbox/xboxseriess.jpg',
        name: 'Xbox Series S',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    {
        id: 6,
        imageSrc: '/images-nintendo/nintendoswitch.jpg',
        name: 'Nintendo Switch',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 7,
        imageSrc: '/images-nintendo/nintendoswitchlite.jpg',
        name: 'Nintendo Switch Lite',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 8,
        imageSrc: '/images-pc/monitor.jpg',
        name: 'Monitor',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 9,
        imageSrc: '/images-steamdeck/steamdeck.jpg',
        name: 'Steam Deck',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
];


export const playstationProducts = [
    {
        id: 1,
        imageSrc: '/images-playstation/ps4.jpg',
        name: 'PlayStation 4',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 264355,
    },
    {
        id: 2,
        imageSrc: '/images-playstation/ps5.jpg',
        name: 'PlayStation 5',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 485317,
    },
    {
        id: 3,
        imageSrc: '/images-playstation/psvita.jpg',
        name: 'PlayStation Vita',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 108694,
    },
    {
        id: 4,
        imageSrc: '/images-playstation/ps4pad.jpg',
        name: 'PlayStation 4 Controller',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 108694,
    },
    {
        id: 5,
        imageSrc: '/images-playstation/ps5pad.jpg',
        name: 'PlayStation 5 Controller',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 108694,
    },
    {
        id: 6,
        imageSrc: '/images-playstation/chargingdock.jpg',
        name: 'Charging Station',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stars: 4.5,
        quantity: 1,
        price: 108694,
    },
    // Add more PlayStation products as needed
];

export const xboxProducts = [
    {
        id: 1,
        imageSrc: '/images-xbox/xboxone.jpg',
        name: 'Xbox One',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 194015,
    },
    {
        id: 2,
        imageSrc: '/images-xbox/xboxseriesx.jpg',
        name: 'Xbox Series X',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    {
        id: 3,
        imageSrc: '/images-xbox/xboxpad.jpg',
        name: 'Xbox Controller',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    {
        id: 4,
        imageSrc: '/images-xbox/xboxseriesxpad.jpg',
        name: 'Xbox Series X Controller',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    {
        id: 5,
        imageSrc: '/images-xbox/xboxseriess.jpg',
        name: 'Xbox Series S',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 463766,
    },
    // Add more Xbox products as needed
];

export const nintendoProducts = [
    {
        id: 1,
        imageSrc: '/images-nintendo/nintendoswitch.jpg',
        name: 'Nintendo Switch',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 2,
        imageSrc: '/images-nintendo/nintendoswitchlite.jpg',
        name: 'Nintendo Switch Lite',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 3,
        imageSrc: '/images-nintendo/joycon.jpg',
        name: 'Joy Con',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 4,
        imageSrc: '/images-nintendo/nintendoswitchprocontroller.jpg',
        name: 'Nintendo Switch Pro Controller',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    {
        id: 5,
        imageSrc: '/images-nintendo/chargerdock.jpg',
        name: 'PowerA Controller Charging Base',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.7,
        quantity: 1,
        price: 385317,
    },
    // Add more Nintendo products as needed
];

export const pcProducts = [
    {
        id: 1,
        imageSrc: '/images-pc/keyboard.jpg',
        name: 'Gaming Keyboard',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 2,
        imageSrc: '/images-pc/monitor.jpg',
        name: 'Monitor',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 3,
        imageSrc: '/images-pc/mouse.jpg',
        name: 'Gaming Mouse',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 4,
        imageSrc: '/images-pc/speakers.jpg',
        name: 'Speakers',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    // Add more Nintendo products as needed
];

export const steamdeckProducts = [
    {
        id: 1,
        imageSrc: '/images-steamdeck/steamdeck.jpg',
        name: 'Steam Deck',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 2,
        imageSrc: '/images-steamdeck/steamdeckcharger.jpg',
        name: 'Steam Deck Charger',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    {
        id: 3,
        imageSrc: '/images-steamdeck/steamdeckdockstation.jpg',
        name: 'Steam Deck Dock Station',
        details: 'Pellentesque in ipsum id orci porta dapibus.',
        stars: 4.8,
        quantity: 1,
        price: 598899,
    },
    // Add more Steam Deck products as needed
];

export const allProducts = [
    ...playstationProducts,
    ...pcProducts,
    ...xboxProducts,
    ...nintendoProducts,
    ...steamdeckProducts,
];
