import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';

const umkmMaterials = [
  {
    title: 'Pembinaan Komunikasi Usaha Bersama UMKM',
    desc: 'Materi ini membahas teknik komunikasi efektif dalam usaha, cara membangun relasi dengan pelanggan, dan meningkatkan kepercayaan konsumen.',
    icon: '🗣️',
  },
  {
    title: 'Penguatan UMKM melalui Strategi E-commerce yang Cerdas dan Adaptif di Era Digital',
    desc: 'Mengenalkan strategi pemasaran online, penggunaan platform e-commerce, dan adaptasi terhadap perkembangan digital untuk meningkatkan penjualan.',
    icon: '🛒',
  },
  {
    title: 'Pendampingan Aspek Hukum dalam Perlindungan Data Pribadi Terhadap Transaksi Non-Tunai',
    desc: 'Materi ini memberikan pemahaman hukum mengenai perlindungan data pribadi, keamanan transaksi non-tunai, dan kepatuhan terhadap regulasi.',
    icon: '⚖️',
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-green-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow space-y-24">
        {/* Proker 1 – Memasak Kimbab */}
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
              Workshop Memasak Kimbab
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Mengenal kuliner Korea melalui kegiatan seru memasak Kimbab menggunakan bahan-bahan lokal.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Gambar */}
            <div className="md:w-1/2">
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/kimbab/kimbab-workshop.jpg`}
                alt="Memasak Kimbab"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Isi */}
            <div className="md:w-1/2 space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Pengenalan Bahan dan Alat:</strong> Mengenal bahan kimbab dan peralatan memasak.</li>
                <li><strong>Teknik Memasak dan Menggulung:</strong> Belajar cara memasak nasi, memotong bahan, dan menggulung kimbab.</li>
                <li><strong>Workshop Memasak:</strong> Peserta membuat kimbab berkelompok dengan pendampingan.</li>
                <li><strong>Penyajian dan Dekorasi:</strong> Memotong dan menyajikan kimbab dengan tampilan menarik.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proker 2 – Pembinaan Usaha Bersama UMKM */}
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
              Pembinaan Usaha Bersama UMKM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Program pemberdayaan pelaku UMKM melalui presentasi, coaching, dan pelatihan strategi bisnis untuk mendukung pertumbuhan usaha.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:flex-row-reverse">
            {/* Gambar */}
            <div className="md:w-1/2">
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/umkm/umkm-pembinaan.jpg`}
                alt="Pembinaan UMKM"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Isi */}
            <div className="md:w-1/2 space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Strategi Bisnis:</strong> Pemahaman dasar pengembangan usaha kecil dan menengah.</li>
                <li><strong>Branding & Digital Marketing:</strong> Teknik pemasaran melalui media sosial dan platform digital.</li>
                <li><strong>Networking:</strong> Membangun jejaring dan peluang kolaborasi antar pelaku usaha.</li>
              </ul>
            </div>
          </div>

          {/* Materi Presentasi */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {umkmMaterials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{material.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{material.title}</h3>
                <p className="text-gray-600">{material.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

