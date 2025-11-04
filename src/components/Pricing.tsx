import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Dasar',
      icon: Star,
      price: '1,000,000',
      description: 'Sempurna untuk perorangan dan proyek kecil',
      popular: false,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Maksimal 5 Halaman',
        '5 Sesi Konsultasi Gratis',
        'Gratis Domain (1 Tahun)',
        'Desain Responsif',
        'Optimasi SEO Dasar',
        'Formulir Kontak',
        'Integrasi Media Sosial',
        'Dukungan Gratis 1 Bulan',
        'Sertifikat SSL',
        'Integrasi Google Analytics',
      ],
    },
    {
      name: 'Profesional',
      icon: Zap,
      price: '2,500,000',
      description: 'Ideal untuk bisnis dan organisasi yang sedang berkembang',
      popular: true,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Maksimal 15 Halaman',
        '10 Sesi Konsultasi Gratis',
        'Gratis Domain (1 Tahun)',
        'Desain Responsif',
        'Optimasi SEO Lanjutan',
        'Formulir Kontak & Kueri',
        'Integrasi Media Sosial',
        'Dukungan Gratis 3 Bulan',
        'Sertifikat SSL',
        'Google Analytics & Search Console',
        'Integrasi WhatsApp',
        'Integrasi Email',
        'Dasbor Admin',
        'Content Management System (CMS)',
        'Galeri Gambar',
      ],
    },
    {
      name: 'Premium',
      icon: Crown,
      price: '5,000,000',
      description: 'Solusi lengkap untuk perusahaan dan proyek kompleks',
      popular: false,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Halaman Tanpa Batas',
        'Konsultasi Tanpa Batas',
        'Gratis Domain (1 Tahun)',
        'Desain Responsif',
        'Optimasi SEO Premium',
        'Formulir & Fitur Lanjutan',
        'Integrasi Media Sosial',
        'Dukungan Gratis 6 Bulan',
        'Sertifikat SSL',
        'Suite Analitik Lanjutan',
        'Integrasi WhatsApp & Email',
        'Dasbor Admin Lanjutan',
        'Manajemen Konten Penuh',
        'Fungsionalitas E-commerce',
        'Integrasi Gerbang Pembayaran',
        'Pengembangan Fitur Kustom',
        'Integrasi Database',
        'Integrasi API',
        'Optimasi Performa',
        'Dukungan Prioritas',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Harga Transparan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket sempurna yang sesuai dengan kebutuhan dan anggaran Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 ${
                  plan.popular ? 'border-indigo-600 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
                } p-8 transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-xl font-semibold text-gray-900">IDR</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 ml-2">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">Pembayaran sekali</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3.5 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Mulai Sekarang
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <p className="text-gray-700 text-lg">
            <strong>Semua paket termasuk:</strong> Minimal 5 konsultasi gratis, registrasi domain gratis 1 tahun, desain responsif, dan dukungan berkelanjutan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
