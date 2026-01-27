export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Iced Coffee Milk",
    price:1,
    image: "/assets/coffeemilk.jpg",
    description: "Rich espresso with cold milk and ice.",
  },
  {
    id: "2",
    name: "Matcha Special",
    price: 1.25,
    image: "/assets/matchas.jpg",
    description: "Premium matcha green tea special blend.",
  },
  {
    id: "3",
    name: "Blue Matcha Series",
    price: 1.25,
    image: "/assets/matchbl.jpg",
    description: "Unique blue matcha with creamy milk.",
  },
  {
    id: "4",
    name: "Blueberry Soda",
    price: 1,
    image: "/assets/sodabl.jpg",
    description: "Refreshing blueberry soda.",
  },
  {
    id: "5",
    name: "Strawberry Soda",
    price: 1,
    image: "/assets/sodas.jpg",
    description: "Sweet and bubbly strawberry soda.",
  },
  {
    id: "6",
    name: "Matcha latte",
    price: 1,
    image: "/assets/matchalette.png", // Reusing image as we only have 5
    description: "Matcha latte .",
  },
];
