'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!'); // Replace with actual form submission logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md p-6 rounded-lg">
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        
        {/* Contact Info */}
        <div className="space-y-6 bg-gray-100 p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" />
            <p>contact@yourcompany.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" />
            <p>+880 123 456 789</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
