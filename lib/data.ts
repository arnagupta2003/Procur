// Mock data for development
export const mockProducts = [
  {
    id: '1',
    name: 'Premium Laptop',
    description: 'High-performance laptop with latest specifications',
    price: 1299.99,
    vendorId: 'v1',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853'],
    stock: 10,
    tags: ['laptop', 'electronics', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones',
    price: 199.99,
    vendorId: 'v2',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
    stock: 25,
    tags: ['headphones', 'electronics', 'wireless'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockBids = [
  {
    id: 'b1',
    productId: '1',
    buyerId: 'buyer1',
    amount: 1250,
    status: 'active',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 86400000),
  },
  {
    id: 'b2',
    productId: '2',
    buyerId: 'buyer2',
    amount: 180,
    status: 'active',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 86400000),
  },
] as const;