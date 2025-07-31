import React from 'react'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Image from 'next/image'

const activities = [
  {
    title: 'Pengolahan Sampah Plastik',
    desc: 'Peserta belajar memilah dan mengolah sampah plastik menjadi bahan untuk membuat kolase yang bermanfaat dan kreatif.',
    img: '/images/kolase/kolase1.jpg',
  },
  {
    title: 'Belajar Kosakata Lingkungan Bahasa Korea',
    desc: 'Memperkenalkan kata-kata dalam Bahasa Korea yang berhubungan dengan lingkungan, kebersihan, dan daur ulang melalui permainan dan praktik langsung.',
    img: '/images/kolase/kolase2.jpg',
  },
  {
    title: 'Pembuatan Kolase Plastik',
    desc: 'Peserta membuat karya seni kolase plastik dengan desain menarik sambil mempraktikkan kosakata baru yang dipelajari.',
    img: '/images/kolase/kolase3.jpg',
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Edukasi Pengolahan Sampah Plastik dan Kosakata Lingkungan Bahasa Korea melalui Kolase Plastik
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kesadaran lingkungan dengan memanfaatkan limbah plastik untuk menciptakan karya seni yang edukatif dan menarik.
          </p>
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/kolase/kolase-hasil.JPG`}
            alt="Kolase Plastik"
            width={800}
            height={600}
            className="mx-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Kegiatan Section */}
        <section className="mt-16 space-y-16">
          {activities.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Gambar */}
              <div className="md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Teks */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold text-green-700">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page

