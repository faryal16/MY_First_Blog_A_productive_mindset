
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import router from 'next/router';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',

  });

 // app/(auth)/signup/page.tsx
// Modify the handleSubmit function:

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
  
    try {
      // Add your API call here to create account
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        // Redirect to account page or dashboard
        router.push('/account');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      alert(`Failed to create account ${error}`);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row">
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
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md  mx-auto space-y-8">
          <div className="text-left">
            <h2 className="mt-6 text-[36px]  text-green-700">
              Create an account
            </h2>
            <p className="text-[16px]">
            Enter your details below
            </p>
           
          </div>

          <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-8">
    <div>
      <Input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full border-0 border-b border-gray-300 focus:border-black focus:ring-0 rounded-none px-0"
        required
      />
    </div>
    <div>
      <Input
        type="email"
        placeholder="Email or Phone Number"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="w-full border-0 border-b border-gray-300 focus:border-black focus:ring-0 rounded-none px-0"
        required
      />
    </div>
    <div>
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        className="w-full border-0 border-b border-gray-300 focus:border-black focus:ring-0 rounded-none px-0"
        required
      />
    </div>
  </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full text-[16px] bg-green-500 hover:bg-green-900 p-8">
                Create Account
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-4 text-[16px] p-8"
                onClick={() => {/* Add Google Sign Up Logic */}}
              >
                <Image
                  src="/google.png" // Add Google icon
                  alt="Google"
                  width={20}
                  height={20}
                />
                Sign up with Google
              </Button>
            </div>

            <p className="mt-2  text-lg text-center text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="ml-4 underline hover:text-2xl hover:font-bold">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
