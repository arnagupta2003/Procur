'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Building2,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const buyerLinks = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/bids', label: 'My Bids', icon: ShoppingCart },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const vendorLinks = [
  { href: '/vendor', label: 'Overview', icon: Home },
  { href: '/vendor/products', label: 'Products', icon: Package },
  { href: '/vendor/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/vendor/customers', label: 'Customers', icon: Users },
  { href: '/vendor/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/vendor/settings', label: 'Settings', icon: Settings },
];

export function DashboardNav({ role = 'buyer' }: { role?: 'buyer' | 'vendor' }) {
  const pathname = usePathname();
  const links = role === 'buyer' ? buyerLinks : vendorLinks;

  return (
    <nav className="grid items-start gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link key={link.href} href={link.href}>
            <Button
              variant={pathname === link.href ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-2',
                pathname === link.href && 'bg-muted font-medium'
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}