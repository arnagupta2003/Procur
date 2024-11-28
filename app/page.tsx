import { Button } from '@/components/ui/button';
import { Building2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your Ultimate E-Commerce Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect buyers and vendors in a secure, efficient marketplace with advanced features
            like real-time bidding, price comparison, and automated cataloging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/auth/login">
              <Button size="lg" className="w-full sm:w-auto space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Join as Buyer</span>
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Join as Vendor</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'Smart Price Comparison',
    description: 'Compare prices across vendors in real-time with advanced filtering options.',
    icon: ShoppingBag,
  },
  {
    title: 'Real-time Bidding',
    description: 'Participate in live auctions with instant notifications and updates.',
    icon: Building2,
  },
  {
    title: 'Secure Transactions',
    description: 'Multiple payment options with enterprise-grade security protocols.',
    icon: ShoppingBag,
  },
];