import { Product } from '../types';

// This is a mock API service for demo purposes
// In a real app, you would call an actual API endpoint

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'iPhone 13 Pro Max',
    price: 1099.99,
    description: 'The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. It has a pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras with night mode, deep fusion, and Apple ProRAW. The A15 Bionic chip delivers incredible performance.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Samsung Galaxy S21 Ultra',
    price: 999.99,
    description: 'The Samsung Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate. It has a quad camera setup with a 108MP main sensor and supports 8K video recording. The Exynos 2100 or Snapdragon 888 processor delivers incredible performance.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  },
  {
    id: '3',
    title: 'Sony WH-1000XM4 Wireless Headphones',
    price: 349.99,
    description: 'The Sony WH-1000XM4 wireless headphones offer industry-leading noise cancellation, exceptional sound quality, and smart features like speak-to-chat and adaptive sound control. They have up to 30 hours of battery life and comfortable design for all-day wear.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9
  },
  {
    id: '4',
    title: 'Apple MacBook Pro 16-inch',
    price: 2399.99,
    description: 'The 16-inch MacBook Pro features an immersive Retina display, powerful processors, next-generation graphics, and a new Magic Keyboard. With up to 64GB of memory and 8TB of storage, it\'s built for intensive tasks like editing high-resolution photos, creating 3D models, and compiling code.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8
  },
  {
    id: '5',
    title: 'iPad Pro 12.9-inch',
    price: 1099.99,
    description: 'The 12.9-inch iPad Pro features a Liquid Retina XDR display with extreme dynamic range for true-to-life detail. It has the M1 chip for next-level performance, a pro camera system with LiDAR Scanner for immersive AR, and support for Apple Pencil and Magic Keyboard.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Diamond Engagement Ring',
    price: 1999.99,
    description: 'This stunning diamond engagement ring features a 1-carat round brilliant cut diamond set in 14k white gold. The diamond is G color, VS1 clarity, and the band is adorned with pave-set diamonds for extra sparkle.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9
  },
  {
    id: '7',
    title: 'Gold Chain Necklace',
    price: 299.99,
    description: 'This 18k gold chain necklace features a classic design that never goes out of style. The 24-inch length is perfect for layering or wearing alone, and the lobster clasp ensures secure closure.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5
  },
  {
    id: '8',
    title: 'Pearl Stud Earrings',
    price: 149.99,
    description: 'These classic pearl stud earrings feature 8mm freshwater cultured pearls with excellent luster, set in 14k white gold. They come with comfortable push backs and are perfect for everyday wear or special occasions.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/10551158/pexels-photo-10551158.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  },
  {
    id: '9',
    title: 'Tennis Bracelet',
    price: 799.99,
    description: 'This stunning tennis bracelet features 3 carats of round brilliant diamonds set in 14k white gold. The diamonds are G-H color, SI clarity, and the bracelet has a secure box clasp with safety latch.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/11638103/pexels-photo-11638103.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8
  },
  {
    id: '10',
    title: 'Sapphire Pendant Necklace',
    price: 499.99,
    description: 'This beautiful pendant necklace features a 1-carat blue sapphire surrounded by a halo of round brilliant diamonds, set in 14k white gold. The pendant hangs from an 18-inch cable chain with a spring ring clasp.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/12934460/pexels-photo-12934460.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6
  },
  {
    id: '11',
    title: 'Men\'s Slim Fit Dress Shirt',
    price: 49.99,
    description: 'This slim fit dress shirt is made from 100% cotton with wrinkle-free technology. It features a spread collar, button cuffs, and a tailored fit through the chest and waist. Perfect for business or formal occasions.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5
  },
  {
    id: '12',
    title: 'Men\'s Wool Suit',
    price: 299.99,
    description: 'This modern 2-piece suit is crafted from premium wool blend fabric for comfort and durability. It features a 2-button jacket with notch lapels and flat-front pants. Perfect for business or formal occasions.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  },
  {
    id: '13',
    title: 'Men\'s Casual Jeans',
    price: 59.99,
    description: 'These classic straight-leg jeans are made from premium denim with just the right amount of stretch for comfort. They feature 5-pocket styling and a zip fly with button closure.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6
  },
  {
    id: '14',
    title: 'Men\'s Leather Jacket',
    price: 199.99,
    description: 'This classic leather jacket is crafted from premium lambskin leather for a soft, luxurious feel. It features a zip front, snap-down collar, and multiple pockets. The polyester lining ensures comfort in any weather.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8
  },
  {
    id: '15',
    title: 'Men\'s Winter Coat',
    price: 149.99,
    description: 'This premium winter coat features a water-resistant outer shell, down insulation, and a detachable hood with faux fur trim. It has multiple pockets and a full-length zipper with storm flap for maximum protection against the elements.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  },
  {
    id: '16',
    title: 'Women\'s Cocktail Dress',
    price: 89.99,
    description: 'This elegant cocktail dress features a flattering A-line silhouette, V-neckline, and three-quarter sleeves. Made from premium stretch fabric for comfort and ease of movement, it\'s perfect for cocktail parties, weddings, or formal events.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8
  },
  {
    id: '17',
    title: 'Women\'s Yoga Pants',
    price: 39.99,
    description: 'These high-waisted yoga pants are made from moisture-wicking fabric with four-way stretch for maximum comfort and flexibility. They feature a hidden waistband pocket and are perfect for yoga, running, or everyday wear.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  },
  {
    id: '18',
    title: 'Women\'s Cashmere Sweater',
    price: 129.99,
    description: 'This luxurious cashmere sweater features a classic crew neck design and long sleeves. Made from 100% premium Mongolian cashmere, it\'s incredibly soft, warm, and lightweight. Perfect for layering or wearing alone.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/8485142/pexels-photo-8485142.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9
  },
  {
    id: '19',
    title: 'Women\'s Leather Boots',
    price: 169.99,
    description: 'These stylish knee-high boots are crafted from premium leather with a full-length side zipper for easy on/off. They feature a 2.5-inch stacked heel, round toe, and cushioned insole for all-day comfort.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/9046965/pexels-photo-9046965.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6
  },
  {
    id: '20',
    title: 'Women\'s Winter Coat',
    price: 179.99,
    description: 'This premium winter coat features a water-resistant outer shell, down insulation for exceptional warmth, and a detachable hood with faux fur trim. It has a belted waist for a flattering silhouette and multiple pockets for convenience.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/7752845/pexels-photo-7752845.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7
  }
];

// Simulate API call delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get all products
export const fetchProducts = async (): Promise<Product[]> => {
  await delay(800); // Simulate network delay
  return MOCK_PRODUCTS;
};

// Get products by category
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(800); // Simulate network delay
  return MOCK_PRODUCTS.filter(product => product.category === category);
};

// Get product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
  await delay(800); // Simulate network delay
  const product = MOCK_PRODUCTS.find(product => product.id === id);
  
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  
  return product;
};