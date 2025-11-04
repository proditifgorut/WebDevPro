import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Siap Membangun Website Anda?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Mari diskusikan proyek Anda dan ciptakan website memukau yang mewakili merek Anda dengan sempurna. Mulai hari ini dengan konsultasi gratis!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Konsultasi Awal Gratis</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">+62 831-1922-6089</a>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:infoweb@unisgu.ac.id" className="text-lg hover:underline">infoweb@unisgu.ac.id</a>
                </div>
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                <span>Lihat Paket Harga</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Kolaborasi tim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
