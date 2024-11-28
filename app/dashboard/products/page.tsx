'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockProducts } from '@/lib/data';
import { Package } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search products..."
          className="max-w-sm"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="books">Books</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="mt-2">
                {product.description}
              </CardDescription>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price}</span>
                <span className="text-sm text-muted-foreground">
                  Stock: {product.stock}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="w-[48%]">
                Compare
              </Button>
              <Button className="w-[48%]">Place Bid</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}