import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Page = () => {
  const programs = [
    {
      title: "Pelatihan Anak Mendeskripsikan Pariwisata Lokal",
      desc: "Melatih anak-anak mendeskripsikan potensi wisata daerah dengan media digital untuk meningkatkan kebanggaan lokal.",
      icon: "🌍"
    },
    {
      title: "Pelatihan Ekowisata dan Ekonomi Lokal",
      desc: "Anak-anak belajar mendeskripsikan wisata Indonesia dengan menonjolkan ekowisata dan potensi ekonomi daerah.",
      icon: "🌱"
    },
    {
      title: "Pelatihan Bahasa dan Budaya Korea",
      desc: "Mengajarkan anak mendeskripsikan wisata Indonesia sambil mengenal bahasa dan budaya Korea untuk wisatawan asing.",
      icon: "🇰🇷"
    },
    {
      title: "Pelatihan Kesadaran Ekonomi Daerah",
      desc: "Meningkatkan pemahaman anak tentang potensi ekonomi daerah melalui pariwisata dan keterampilan deskripsi.",
      icon: "💼"
    },
    {
      title: "Pelatihan Kesadaran Hukum dan Lingkungan",
      desc: "Mendidik anak mendeskripsikan wisata lokal dengan menumbuhkan kesadaran hukum dan menjaga lingkungan.",
      icon: "⚖️"
    },
    {
      title: "Edukasi Kreatif Ecobrick",
      desc: "Mengajarkan anak mengelola sampah plastik menjadi ecobrick untuk mendukung ekowisata dan ekonomi berkelanjutan.",
      icon: "♻️"
    }
  ];

  return (

    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Pelatihan Anak Mendeskripsikan Pariwisata Indonesia
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serangkaian pelatihan kreatif untuk meningkatkan kebanggaan lokal, mendukung ekowisata, dan menumbuhkan kesadaran ekonomi serta lingkungan pada generasi muda.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
