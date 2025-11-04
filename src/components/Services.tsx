import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, GraduationCap, TreePine, Store } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Profil Perusahaan',
      description: 'Website korporat profesional untuk menampilkan bisnis, layanan, dan pencapaian Anda.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: User,
      title: 'Portofolio Pribadi',
      description: 'Tampil beda dengan website portofolio menawan yang menonjolkan keahlian dan proyek Anda.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      title: 'Website Sekolah',
      description: 'Platform pendidikan lengkap dengan manajemen informasi dan alat komunikasi.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: TreePine,
      title: 'Website Desa',
      description: 'Portal komunitas untuk desa berbagi berita, pengumuman, dan informasi lokal.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Store,
      title: 'Bisnis UMKM',
      description: 'Website e-commerce dan bisnis yang dirancang khusus untuk usaha kecil dan menengah.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi pembuatan website komprehensif yang disesuaikan dengan kebutuhan spesifik Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
