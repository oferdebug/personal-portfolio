"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMailOutline, IoPersonOutline, IoSendOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 focus:outline-none transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            animate={{ x: focused === 'name' ? -20 : 0, opacity: focused === 'name' ? 0 : 1 }}
          >
            <IoPersonOutline className="w-5 h-5" />
          </motion.div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} ${focused === 'name' ? 'pl-4' : 'pl-12'} transition-all duration-300`}
            required
          />
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            animate={{ x: focused === 'email' ? -20 : 0, opacity: focused === 'email' ? 0 : 1 }}
          >
            <IoMailOutline className="w-5 h-5" />
          </motion.div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} ${focused === 'email' ? 'pl-4' : 'pl-12'} transition-all duration-300`}
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className={`${inputClasses} min-h-[150px] resize-none`}
          required
        />

        <motion.button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center justify-center gap-2">
            {status === 'submitting' ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                <IoSendOutline className="w-5 h-5" />
                Send Message
              </>
            )}
          </span>
        </motion.button>
      </form>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mt-4 p-4 rounded-lg ${
              status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            <div className="flex items-center gap-2">
              {status === 'success' ? (
                <IoCheckmarkCircleOutline className="w-5 h-5" />
              ) : (
                <IoAlertCircleOutline className="w-5 h-5" />
              )}
              <span>
                {status === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
