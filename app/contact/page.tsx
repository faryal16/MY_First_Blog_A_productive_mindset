// app/contact/page.tsx
'use client';

import { Phone, Mail } from 'lucide-react'; // Import required icons
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert(`Failed to send message ${error}` );
    }
  };

  return (
    <div className="">

    <div className="min-h-screen  flex justify-center items-center flex-col md:flex-row">
{/* Left Information Div */}
<div className="w-full md:w-1/4  border-[1px] border-green-500 rounded-lg shadow-lg hover:shadow-green-500 p-8 md:p-9 flex flex-col justify-center">
  
  {/* Call to Us Section */}
  <div className="mb-6">
    <div className="flex  items-center gap-3 mb-8">
      <Phone size={25} className=" bg-green-500 p-1 text-white rounded-full" />
      <h2 className="text-xl font-semibold">Call to Us</h2>
    </div>
    <div className="space-y-2">
      <p>We are available 24/7, 7 days a week.</p>
      <p>Phone: +8801611112222</p>
    </div>
  </div>
  
  


  {/* Divider Line green */}
  <div className="w-full h-[1px] bg-green-500 my-6"></div>

 {/* Write With Us */}
  <div>
    <div className="flex items-center gap-3 mb-8 mt-4">
      <Mail size={25} className= "bg-green-500 p-1 text-white rounded-full" />
      <h2 className="text-xl font-semibold">Write To US</h2>
    </div>
    <div className="space-y-2">
      <p>
      Fill out our form and we will contact you within 24 hours.</p>
      <p>Emails: customer@exclusive.com</p>
      <p>Emails: support@exclusive.com</p>
    </div>
  </div>
</div>

      {/* Right Contact Form Div */}
      <div className="w-full md:w-1/2 p-8 md:p-16  border-[1px] border-green-500 rounded-lg  hover:shadow-green-500 shadow-lg md:ml-10 ">
        <form onSubmit={handleSubmit} className="space-y-8   ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4   ">
            <div>
            <input
  type="text"
  placeholder="Your Name*"  // Added asterisk here
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full border-0 border-b  px-6 py-2 m-2 rounded-sm  border-gray-300 focus:border-black focus:ring-0  " // Added placeholder:ml-4 for margin
  required
/>

            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
               className="w-full border-0 border-b  px-6 py-2 m-2 rounded-sm  border-gray-300 focus:border-black/60 focus:ring-0  "
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                 className="w-full border-0 border-b  px-6 py-2 m-2 rounded-sm  border-gray-300 focus:border-black focus:ring-0  "
                required
              />
            </div>
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
             className="w-full border-0 border-b  px-6 py-2 m-2 rounded-sm  border-gray-300 focus:border-black focus:ring-0  "
              required
            />
          </div>
<div className="text-end">

          <Button
            type="submit"
            className=" bg-green-500 hover:bg-green-800  text-white py-3 rounded-md transition duration-300"
            >
            Send Message
          </Button>
            </div>
        </form>
      </div>
    </div>
    </div>
  );
}
