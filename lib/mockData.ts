export const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1200,
    seller: 'Kivu Tech',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=2000&auto=format&fit=crop',
    escrow: true,
    status: 'In Stock',
    category: 'Electronique'
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 950,
    seller: 'Goma Digital',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop',
    escrow: true,
    status: 'Limited',
    category: 'Electronique'
  },
  {
    id: '3',
    name: 'Sac à main cuir véritable',
    price: 45,
    seller: 'Artisanat Nord-Kivu',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    escrow: true,
    status: 'In Stock',
    category: 'Mode'
  },
  {
    id: '4',
    name: 'Casque Sony WH-1000XM5',
    price: 350,
    seller: 'Audio Kivu',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1670057037199-f4528148c081?q=80&w=1935&auto=format&fit=crop',
    escrow: true,
    status: 'In Stock',
    category: 'Electronique'
  }
];

export const orders = [
  {
    id: 'ORD-2024-001',
    product: 'iPhone 15 Pro Max',
    amount: 1200,
    status: 'In Escrow',
    date: '2024-02-21',
    buyer: 'Jean Muvunyi'
  },
  {
    id: 'ORD-2024-002',
    product: 'MacBook Air M2',
    amount: 950,
    status: 'Delivered',
    date: '2024-02-15',
    buyer: 'Sarah Kahindo'
  }
];
