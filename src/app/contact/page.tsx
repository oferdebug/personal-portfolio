"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMailOutline, IoLocationOutline } from "react-icons/io5";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: IoLogoGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: IoLogoLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: IoLogoTwitter,
  },
];

const contactInfo = [
  {
    icon: IoMailOutline,
    label: "Email",
    value: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  {
    icon: IoLocationOutline,
    label: "Location",
    value: "San Francisco, CA",
  },
];

export default function Contact() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
          </div>

          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Have a question or want to work together? Let's connect!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-lg font-medium hover:text-blue-500 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <BackToTop />
      </main>
    </>
  );
}