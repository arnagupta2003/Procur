'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockBids } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function BidsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Bids</h2>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product ID</TableHead>
              <TableHead>Bid Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBids.map((bid) => (
              <TableRow key={bid.id}>
                <TableCell>{bid.productId}</TableCell>
                <TableCell>${bid.amount}</TableCell>
                <TableCell>
                  <Badge variant="outline">{bid.status}</Badge>
                </TableCell>
                <TableCell>
                  {new Date(bid.expiresAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}