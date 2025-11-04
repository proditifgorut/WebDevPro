import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Search, 
  Shield, 
  Zap, 
  HeadphonesIcon, 
  Palette,
  Code2,
  TrendingUp,
  Lock,
  Globe,
  MessageCircle,
  BarChart3
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Responsif di Semua Perangkat',
      description: 'Tampilan sempurna di semua perangkat - mobile, tablet, dan desktop',
    },
    {
      icon: Search,
      title: 'Optimasi SEO',
      description: 'Praktik terbaik SEO untuk peringkat lebih tinggi di mesin pencari',
    },
    {
      icon: Shield,
      title: 'Aman & Andal',
      description: 'Sertifikat SSL dan langkah keamanan untuk melindungi data Anda',
    },
    {
      icon: Zap,
      title: 'Performa Cepat',
      description: 'Kecepatan muat yang dioptimalkan untuk pengalaman pengguna yang lebih baik',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dukungan Gratis',
      description: 'Dukungan khusus selama dan setelah penyelesaian proyek',
    },
    {
      icon: Palette,
      title: 'Desain Kustom',
      description: 'Desain unik yang disesuaikan dengan identitas merek Anda',
    },
    {
      icon: Code2,
      title: 'Kode Bersih',
      description: 'Basis kode yang terstruktur dengan baik dan mudah dikelola',
    },
    {
      icon: TrendingUp,
      title: 'Solusi Skalabel',
      description: 'Dibangun untuk tumbuh bersama kebutuhan bisnis Anda',
    },
    {
      icon: Lock,
      title: 'Perlindungan Data',
      description: 'Sesuai GDPR dengan keamanan data yang kuat',
    },
    {
      icon: Globe,
      title: 'Domain Gratis',
      description: 'Registrasi domain 1 tahun termasuk dalam semua paket',
    },
    {
      icon: MessageCircle,
      title: 'Sesi Konsultasi',
      description: 'Minimal 5 pertemuan konsultasi gratis',
    },
    {
      icon: BarChart3,
      title: 'Integrasi Analitik',
      description: 'Lacak kinerja situs web Anda dengan alat analitik',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Semua yang Anda Butuhkan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fitur lengkap yang disertakan dalam setiap website yang kami bangun
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
