export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

const productData: Product[] = [
  {
    id: 1,
    title: "Ray-Ban Classic",
    price: "$199.99",
    description: "Timeless aviator design with premium metal frames and crystal lenses for superior clarity.",
    image: "https://storage.googleapis.com/a1aa/image/b007f058-7624-4e12-194b-24fd821932c7.jpg"
  },
  {
    id: 2,
    title: "Lacoste Elite",
    price: "$179.99",
    description: "Sporty and sophisticated frames that combine style with durability for active lifestyles.",
    image: "https://storage.googleapis.com/a1aa/image/3a2ef917-6c04-43f3-18dd-2954f574db1e.jpg"
  },
  {
    id: 3,
    title: "Oakley Performance",
    price: "$249.99",
    description: "High-performance frames with advanced lens technology for crystal clear vision.",
    image: "https://storage.googleapis.com/a1aa/image/4edbe6da-25c4-43e5-8edd-bdbb8a464288.jpg"
  },
  {
    id: 4,
    title: "Gucci Elegance",
    price: "$399.99",
    description: "Luxury eyewear that combines Italian craftsmanship with contemporary design.",
    image: "https://storage.googleapis.com/a1aa/image/ef00a891-69eb-480a-ea8b-b4a71f1b05d7.jpg"
  },
  {
    id: 5,
    title: "Prada Vision",
    price: "$349.99",
    description: "Sophisticated frames that make a bold statement with premium materials.",
    image: "https://storage.googleapis.com/a1aa/image/408ad14a-0515-4b2f-31bf-f8df755bde3d.jpg"
  },
  {
    id: 6,
    title: "Versace Luxury",
    price: "$449.99",
    description: "Exclusive designer frames featuring iconic Versace elements and premium craftsmanship.",
    image: "https://storage.googleapis.com/a1aa/image/0b777b54-f7ae-43f5-a190-e65631e4f38b.jpg"
  }
];

export default productData;