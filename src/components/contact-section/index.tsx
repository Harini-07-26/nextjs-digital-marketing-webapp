'use client';

import { Phone, Mail, MapPin, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal } from '../scroll-reveal';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <ScrollReveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
                {"Let's Build Something Great Together"}
              </h2>
              <p className="text-slate-500 text-lg mb-10 max-w-lg">
                {
                  "Ready to scale your brand with performance marketing that actually performs? Get in touch and let\'s discuss your growth goals."
                }
              </p>
              {/* Strategy Call Card */}
              <div className="bg-slate-900 rounded-2xl p-6 mb-10 max-w-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span className="font-bold text-white">Book a Free Strategy Call</span>
                </div>
                <p className="text-slate-400 mb-5">Schedule a 30-minute consultation to discuss your growth goals</p>
                <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-3 transition-colors">
                  Book Your Slot <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {/* Contact Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-red-500" />
                  </div>
                  <span className="text-slate-800 font-medium">0203 488 2548</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-slate-800 font-medium">hello@xpandify.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-pink-500" />
                  </div>
                  <span className="text-slate-800 font-medium">Chennai, TN</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          {/* Right Side - Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">Company name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">Phone number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="input-field"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
              >
                Submit <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
