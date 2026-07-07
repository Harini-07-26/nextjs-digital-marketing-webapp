'use client';

import { Phone, Mail, MapPin, Zap, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.company || !formData.phone) {
      setStatus('error');
      setErrorMessage('Please enter all the required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: ''
      });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit form. Please check your connection.');
    }
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
                  "Ready to scale your brand with performance marketing that actually performs? Get in touch and let's discuss your growth goals."
                }
              </p>
              {/* Strategy Call Card */}
              <div className="bg-slate-900 rounded-2xl p-6 mb-10 max-w-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span className="font-bold text-white">Book a Free Strategy Call</span>
                </div>
                <p className="text-slate-400 mb-5">Schedule a 30-minute consultation to discuss your growth goals</p>
                <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-3 transition-colors cursor-pointer">
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
            {status === 'success' ? (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 text-center space-y-6 shadow-lg max-w-lg mx-auto lg:mr-0 lg:ml-auto">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-emerald-500 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-500 text-sm md:text-base">
                    {
                      'Thank you for reaching out. Our growth strategy team is already reviewing your details and will get back to you within 24 hours.'
                    }
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg px-6 py-3 transition-colors cursor-pointer"
                >
                  Send Another Message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto lg:mr-0 lg:ml-auto">
                {status === 'error' && (
                  <div className="bg-rose-50 border border-rose-100 text-rose-800 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Submission Error</p>
                      <p className="text-xs text-rose-600 mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="input-field border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-slate-50/50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="input-field border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-slate-50/50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="input-field border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-slate-50/50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="input-field border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-slate-50/50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="input-field border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-slate-50/50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="+44 20 7946 0192"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold rounded-lg px-6 py-3 transition-colors cursor-pointer w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      Submitting... <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Details <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
