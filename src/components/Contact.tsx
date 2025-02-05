import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0d0d0d] text-[#abb2bf] font-mono">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <Phone className="text-gray-400" size={20} />
                <a
                  href="tel:+918400869600"
                  className="text-[#a9b7c6] hover:text-blue-400 transition-colors"
                >
                  +91 8400869600
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <Mail className="text-gray-400" size={20} />
                <a
                  href="mailto:deepankargautam@1998.com"
                  className="text-[#a9b7c6] hover:text-blue-400 transition-colors"
                >
                  deepankargautam@1998.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="text-gray-400" size={20} />
                <span className="text-[#a9b7c6]">Noida, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {/* The form section can be added here with similar animations */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
