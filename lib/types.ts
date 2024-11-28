export type User = {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'vendor';
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  vendorId: string;
  category: string;
  images: string[];
  stock: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Bid = {
  id: string;
  productId: string;
  buyerId: string;
  amount: number;
  status: 'active' | 'won' | 'lost' | 'expired';
  createdAt: Date;
  expiresAt: Date;
};