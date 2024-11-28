'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, User } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');

  const handleSendOTP = async () => {
    // TODO: Implement OTP sending logic
    setStep('otp');
    return true;
  };

  const handleVerifyOTP = async () => {
    // TODO: Implement OTP verification logic
    return true;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>

      <Tabs defaultValue="buyer" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buyer" className="space-x-2">
            <User className="h-4 w-4" />
            <span>Buyer</span>
          </TabsTrigger>
          <TabsTrigger value="vendor" className="space-x-2">
            <Building2 className="h-4 w-4" />
            <span>Vendor</span>
          </TabsTrigger>
        </TabsList>

        {['buyer', 'vendor'].map((role) => (
          <TabsContent key={role} value={role} className="space-y-4">
            {step === 'email' ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${role}-email`}>Email</Label>
                  <Input
                    id={`${role}-email`}
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={handleSendOTP}>
                  Send OTP
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${role}-otp`}>Enter OTP</Label>
                  <Input
                    id={`${role}-otp`}
                    type="text"
                    placeholder="Enter the OTP sent to your email"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={handleVerifyOTP}>
                  Verify OTP
                </Button>
                <Button
                  variant="link"
                  className="w-full"
                  onClick={() => setStep('email')}
                >
                  Back to Email
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}