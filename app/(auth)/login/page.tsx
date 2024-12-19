
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import router from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 // app/(auth)/login/page.tsx
// Modify the handleSubmit function:

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add your API call here to login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        // Redirect to account page or dashboard
        router.push('/account');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      alert(`Login Failed ${error}` );
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="hidden md:flex justify-center items-center md:w-1/2 ">
      <Image
          src="/login.png" // Add your image path here
          alt="Signup visual"
          width={400}
          height={400}
          className="h-4/6 w-11/12 ml-4 rounded-[20px] shadow-lg shadow-gray-400  "
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="max-w-md  mx-auto space-y-8">
          <div className="text-left">
            <h2 className="mt-6 text-[36px]  text-green-700">
            Log in to Exclusive
            </h2>
            <p className="text-[16px]">
            Enter your details below
            </p>
          </div>

          <form className="mt-8 space-y-10" onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <Input
                  type="email"
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-0 border-b border-gray-300 focus:border-black focus:ring-0 rounded-none px-0"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
     className="w-full border-0 border-b border-gray-300 focus:border-black focus:ring-0 rounded-none px-0"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              
                <Button type="submit" className=" text-[16px] bg-green-500  hover:bg-green-900 px-8 py-6">
                Log in
              </Button>
              </div>

              <div className="text-base">
                <Link
                  href="/forgot-password"
                  className="text-green-500 hover:text-2xl "
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
}
