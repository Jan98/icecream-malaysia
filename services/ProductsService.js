const PRODUCTS = [
    {
        id: 100,
        name: 'Milo',
        price: 1.50,
        image: require('../assets/products/milo.jpeg'),
        description: 'A delicious Milo ice cream recipe paired with the rich flavor of Milo is guaranteed to delight! Milo is made of malt barley, cocoa, milk solids and sugar. It is fortified with vitamins and minerals including calcium, iron and vitamins C, B3, B6, B2, D and B12.'
    },
    {
        id: 101,
        name: 'Limau Pudina',
        price: 1.50,
        image: require('../assets/products/limau_pudina.jpeg'),
        description: 'This homemade limau pudina ice cream is refreshing, tasty and perfect on a hot day! Made with fresh lemon juice and fresh mint.'
    },
    {
        id: 102,
        name: 'Asam Boi',
        price: 1.50,
        image: require('../assets/products/asam_boi.jpeg'),
        description: 'This asam boi ice cream is has an interesting tanginess from calamansi lime and sweet-salty sour plum, also known as asam boi. '
    },
    {
        id: 103,
        name: 'Cendol',
        price: 1.50,
        image: require('../assets/products/cendol.jpeg'),
        description: 'The delicious flavor of cendol ice cream with which can be enjoyed in a hot day! Cendol which is a famous traditional Malaysian flavor.'
    },
    {
        id: 104,
        name: 'Choki-Choki',
        price: 1.50,
        image: require('../assets/products/choki_choki.jpeg'),
        description: 'This homemade choki-choki ice cream is irresistibly creamy and made with two forms of chocolate and milk-based for a deep rich flavor. This homemade ice cream not overly sweet, and is just as delicious!'
    },
    {
        id: 105,
        name: 'Laici',
        price: 1.50,
        image: require('../assets/products/laici.jpeg'),
        description: 'Homemade Laici Ice Cream has a very soft, refreshing, and pulpy texture. You can feel the chopped lychees melting in your mouth.'
    }
];
export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}