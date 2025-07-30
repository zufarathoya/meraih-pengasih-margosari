import React from 'react';
import { programs } from '../data/prokerData';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
const Page = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3 ">
            Program Kerja Kami
          </h1>
        </div>
        <h1 className="text-xl mb-7 mt-7">
          Berikut ini adalah program kerja yang kami lakukan selama kegiatan KKN ini berlangsung yang bertemakan Pengembangan Ekowisata dan Ketahanan Pangan di Kalurahan Margosari
        </h1>
        <div className=" md:grid grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <a href={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/proker/${prog.link}`}>
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{prog.title}</h3>
                <span className="text-sm text-gray-500">{prog.date}</span>
                <p className="text-gray-600 mt-2 flex-grow">{prog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default Page
